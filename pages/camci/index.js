import Head from 'next/head';
import Nav from '@includes/nav';
import { useEffect } from 'react';
import { PAPERS } from '../../data/camci-papers';

export default function CamciLevantamento() {
  useEffect(() => {
    const q       = document.getElementById('q');
    const yearSel = document.getElementById('year-sel');
    const content = document.getElementById('camci-content');
    const empty   = document.getElementById('camci-empty');
    const count   = document.getElementById('camci-count');
    const hint    = document.getElementById('camci-hint');

    if (!q || !content) return;

    /* ---- helpers ---- */
    function norm(s) { return (s || '').toLowerCase().trim(); }

    function citation(p) {
      var link  = p.url || (p.doi ? ('https://doi.org/' + p.doi) : '');
      var parts = [p.authors + ' (' + String(p.year) + ').', p.title + '.'];
      if (p.venue) parts.push(p.venue + '.');
      if (link)   parts.push(link);
      return parts.join(' ');
    }

    function haystack(p) {
      return norm([p.year, p.authors, p.title, p.venue, p.doi, p.url, p.tag].join(' '));
    }

    function el(tag, attrs, text) {
      var node = document.createElement(tag);
      if (attrs) Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
      if (typeof text === 'string') node.textContent = text;
      return node;
    }

    /* ---- render ---- */
    function renderPaper(p) {
      var card = el('article', { class: 'paper', 'data-year': String(p.year) });
      card.setAttribute('data-haystack', haystack(p));

      var h3 = el('h3');
      h3.appendChild(el('a', { href: p.url || ('https://doi.org/' + p.doi), target: '_blank', rel: 'noreferrer' }, p.title));
      card.appendChild(h3);

      var citeLine = p.authors + ' (' + String(p.year) + '). ' +
                     (p.venue ? p.venue + '. ' : '') +
                     (p.doi   ? 'DOI: ' + p.doi : '');
      card.appendChild(el('p', { class: 'cite' }, citeLine));


      var actions = el('div', { class: 'actions' });
      actions.appendChild(el('a', { class: 'btn primary', href: p.url || ('https://doi.org/' + p.doi), target: '_blank', rel: 'noreferrer' }, 'Abrir DOI'));
      var btn = el('button', { class: 'btn', type: 'button', 'data-copy': citation(p) }, 'Copiar citação');
      actions.appendChild(btn);
      card.appendChild(actions);
      return card;
    }

    function renderYearSection(y, papers) {
      var sec  = el('section', { class: 'year', 'data-year': String(y) });
      var head = el('div', { class: 'year-head' });
      head.appendChild(el('h2', { class: 'year-title' }, String(y)));
      head.appendChild(el('div', { class: 'year-count' }, papers.length + ' itens'));
      sec.appendChild(head);
      var grid = el('div', { class: 'grid' });
      papers.forEach(function (p) { grid.appendChild(renderPaper(p)); });
      sec.appendChild(grid);
      return sec;
    }

    function uniqYears() {
      var ys = {};
      PAPERS.forEach(function (p) { ys[p.year] = true; });
      return Object.keys(ys).map(Number).sort(function (a, b) { return b - a; });
    }

    function renderAll() {
      while (content.firstChild) content.removeChild(content.firstChild);
      content.appendChild(empty);
      uniqYears().forEach(function (y) {
        var ps = PAPERS.filter(function (p) { return p.year === y; });
        content.appendChild(renderYearSection(y, ps));
      });
    }

    function populateYearSelect() {
      uniqYears().forEach(function (y) {
        yearSel.appendChild(el('option', { value: String(y) }, String(y)));
      });
    }

    function applyFilters() {
      var needle = norm(q.value);
      var y      = yearSel.value;
      var visible = 0;
      var perYear = {};

      Array.prototype.slice.call(document.querySelectorAll('.paper')).forEach(function (card) {
        var okYear   = !y || card.getAttribute('data-year') === y;
        var okNeedle = !needle || norm(card.getAttribute('data-haystack')).indexOf(needle) !== -1;
        var show = okYear && okNeedle;
        card.style.display = show ? '' : 'none';
        if (show) { visible++; var yy = card.getAttribute('data-year'); perYear[yy] = (perYear[yy] || 0) + 1; }
      });

      Array.prototype.slice.call(document.querySelectorAll('section.year')).forEach(function (sec) {
        var yy = sec.getAttribute('data-year');
        sec.style.display = (perYear[yy] || 0) > 0 ? '' : 'none';
        var c = sec.querySelector('.year-count');
        if (c) c.textContent = (perYear[yy] || 0) + ' itens';
      });

      count.textContent  = String(visible);
      empty.style.display = visible === 0 ? 'block' : 'none';
    }

    function setupShortcuts() {
      var isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
      hint.textContent = isMac ? 'Cmd+K' : 'Ctrl+K';
      document.addEventListener('keydown', function (e) {
        if ((isMac ? e.metaKey : e.ctrlKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); q.focus(); }
      });
    }

    /* ---- event delegation ---- */
    function handleCopy(e) {
      var t   = e.target;
      var txt = t.getAttribute && t.getAttribute('data-copy');
      if (!txt) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () {
          var old = t.textContent;
          t.textContent = 'Copiado!';
          setTimeout(function () { t.textContent = old; }, 900);
        });
      }
    }

    document.addEventListener('click', handleCopy);

    populateYearSelect();
    renderAll();
    setupShortcuts();
    applyFilters();

    q.addEventListener('input', applyFilters);
    yearSel.addEventListener('change', applyFilters);

    return function () {
      document.removeEventListener('click', handleCopy);
      q.removeEventListener('input', applyFilters);
      yearSel.removeEventListener('change', applyFilters);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Levantamento Bibliográfico sobre Mudas e Classificação de Idades</title>
      </Head>

      <Nav allBlack={true} />

      <div id='camci-page' className='camci-page'>
        <div className='wrap'>
          <header>
            <div className='camci-card'>
              <h1 className='title'>Levantamento Bibliográfico sobre Mudas e Classificação de Idades</h1>
              <p className='disclaimer'>
                <em>Levantamento gerado automaticamente para o Curso de Análise de Mudas e Classificação de Idade em Aves. Não se trata de uma busca extensiva da literatura e não inclui todos os artigos disponíveis sobre o tema.</em>
              </p>

              <div className='controls'>
                <div className='search' role='search'>
                  <input id='q' type='search' placeholder='Buscar por autor, título, DOI ou tag…' autoComplete='off' />
                  <span className='hint' id='camci-hint'>Ctrl+K</span>
                </div>
                <select id='year-sel' aria-label='Filtrar por ano'>
                  <option value=''>Todos os anos</option>
                </select>
              </div>

              <p className='subtitle'>
                Use a busca para localizar autores, títulos, DOI ou temas. Clique em <strong>Abrir DOI</strong> para acessar o artigo e em <strong>Copiar citação</strong> para reutilizar a referência.
              </p>

              <div className='meta'>
                <span className='pill'><span className='dot'></span><span id='camci-count'>0</span>&nbsp;itens visíveis</span>
                <span className='pill'><span className='dot warn'></span>Filtre por ano ou por palavra-chave</span>
              </div>
            </div>
          </header>

          <main id='camci-content'>
            <div className='empty' id='camci-empty'>Nenhum item encontrado com os filtros atuais.</div>
          </main>

          <footer>
            <p>Dica: pesquise por termos como WRP, preformative, molt limits ou phenology.</p>
          </footer>
        </div>


      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'Oswald';
          src: url('/Oswald-VariableFont_wght.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Montserrat';
          src: url('/Montserrat-VariableFont_wght.ttf') format('truetype');
        }
        @font-face {
          font-family: 'MontserratSemi';
          src: url('/Montserrat-SemiBold.ttf') format('truetype');
        }

        .camci-page {
          --camci-bg:      #eab308;
          --surface:       #ffffff;
          --surface-soft:  #fffbeb;
          --text:          #111827;
          --muted:         #6b7280;
          --stroke:        #e5e7eb;
          --stroke-strong: #d1d5db;
          --accent:        #facc15;
          --shadow:        0 10px 30px rgba(17,24,39,0.05);
          --radius:        18px;

          min-height: 100vh;
          background: var(--camci-bg);
          color: var(--text);
          font: 16px/1.6 'Montserrat', ui-sans-serif, system-ui, sans-serif;
          padding-top: 56px; /* altura da nav fixa */
        }

        .camci-page a { color: inherit; text-decoration: none; }
        .camci-page a:hover { text-decoration: underline; }

        .camci-page .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 40px 18px 56px;
        }

        .camci-page header { margin-bottom: 24px; }

        .camci-page .camci-card {
          border: 1px solid var(--stroke);
          border-radius: 24px;
          background: var(--surface);
          box-shadow: var(--shadow);
          padding: 28px 22px 22px;
        }

                .camci-page .title {
          margin: 0;
          color: var(--text);
          font-family: 'Oswald', Impact, sans-serif;
          font-weight: 500;
          line-height: 1.05;
          letter-spacing: 0.01em;
          font-size: clamp(30px, 5vw, 48px);
        }

        .camci-page .disclaimer {
          max-width: 760px;
          margin: 6px 0 0;
          color: var(--muted);
          font-size: 12px;
        }

        .camci-page .subtitle {
          max-width: 760px;
          margin: 12px 0 0;
          color: var(--muted);
          font-size: 14px;
        }

        .camci-page .controls {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 900px) {
          .camci-page .controls { grid-template-columns: 1fr 220px; align-items: center; }
        }

        .camci-page .search,
        .camci-page select {
          border: 1px solid var(--stroke);
          background: var(--surface);
          color: var(--text);
          border-radius: 14px;
        }
        .camci-page .search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
        }
        .camci-page .search input {
          width: 100%;
          border: 0;
          outline: none;
          color: var(--text);
          background: transparent;
          font: inherit;
        }
        .camci-page .search input::placeholder { color: #9ca3af; }
        .camci-page .hint { color: var(--muted); font-size: 12px; white-space: nowrap; }
        .camci-page select { width: 100%; padding: 12px 14px; outline: none; font: inherit; }

        .camci-page .meta {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          color: var(--muted);
          font-size: 13px;
        }
        .camci-page .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--stroke);
          background: var(--surface-soft);
          padding: 7px 12px;
          border-radius: 999px;
        }
        .camci-page .dot { width: 8px; height: 8px; border-radius: 999px; background: var(--text); }
        .camci-page .dot.warn { background: var(--accent); }

        .camci-page main { margin-top: 18px; }

        .camci-page .year {
          margin-top: 16px;
          border-radius: var(--radius);
          border: 1px solid var(--stroke);
          background: var(--surface);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .camci-page .year-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          padding: 16px 18px;
          border-bottom: 1px solid var(--stroke);
        }
        .camci-page .year-title {
          margin: 0;
          font-family: 'Oswald', Impact, sans-serif;
          font-size: 28px;
          line-height: 1;
          letter-spacing: 0.02em;
        }
        .camci-page .year-count { color: var(--muted); font-size: 13px; }

        .camci-page .grid {
          padding: 14px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 900px) {
          .camci-page .grid { grid-template-columns: 1fr 1fr; }
        }

        .camci-page .paper {
          border: 1px solid var(--stroke);
          background: var(--surface);
          border-radius: 16px;
          padding: 16px;
          transition: border-color .18s ease, box-shadow .18s ease;
        }
        .camci-page .paper:hover {
          border-color: var(--stroke-strong);
          box-shadow: 0 8px 22px rgba(17,24,39,0.06);
        }
        .camci-page .paper h3 {
          margin: 0;
          font-family: 'MontserratSemi', 'Montserrat', sans-serif;
          font-size: 16px;
          line-height: 1.4;
        }
        .camci-page .paper .cite {
          margin: 10px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .camci-page .actions { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; }
        .camci-page .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--stroke);
          background: var(--surface-soft);
          color: var(--text);
          padding: 9px 12px;
          border-radius: 12px;
          font: 700 12px/1 'MontserratSemi', 'Montserrat', sans-serif;
          cursor: pointer;
          text-decoration: none;
        }
        .camci-page .btn:hover { border-color: var(--stroke-strong); background: #f3f4f6; text-decoration: none; }
        .camci-page .btn.primary { border-color: var(--text); background: var(--text); color: #fff; }
        .camci-page .btn.primary:hover { background: #000; border-color: #000; }

        .camci-page .empty {
          margin: 20px 0 0;
          padding: 18px;
          border: 1px dashed var(--stroke-strong);
          border-radius: var(--radius);
          color: var(--muted);
          background: var(--surface);
          display: none;
        }

        .camci-page footer { margin-top: 20px; color: var(--muted); font-size: 13px; }
        .camci-page footer p { margin: 0; }

        @media (max-width: 640px) {
          .camci-page .wrap { padding-top: 24px; padding-bottom: 40px; }
          .camci-page .title { font-size: clamp(28px, 9vw, 38px); }
        }


      `}</style>
    </>
  );
}
