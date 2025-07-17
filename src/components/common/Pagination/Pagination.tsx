import { usePainingsContext } from '../../hooks/usePainingsContext';
import styles from './styles.module.scss';

const LIMIT = 6

export function Pagination () {

  const {data, limit, page, setPaintignsData } = usePainingsContext()

  const totalPages = data ? Math.ceil(data.total / limit) : 0;

  function setPage(i: number){
    setPaintignsData({limit: LIMIT, page: i+1})
  }

  function goToPreviousPage() {
    if (page > 1) {
      setPaintignsData({limit: LIMIT, page: page - 1})
    }
  }

  function goToNextPage() {
    if (page < totalPages) {
      setPaintignsData({limit: LIMIT, page: page + 1})
    }
  }

  function getPaginationRange(): (number | '...')[] {
    const renderPages = new Set<number>();
  
    if (totalPages > 1) {
      renderPages.add(1);
      renderPages.add(totalPages);
    }
  
    renderPages.add(page);
  
    if (page > 1) {
      renderPages.add(page - 1);
    }
  
    if (page < totalPages) {
      renderPages.add(page + 1);
    }

    if(page === 1){
      renderPages.add(page + 2);
    }

    if(page === totalPages){
      renderPages.add(page - 2);
    }
  
    const sortedPages = Array.from(renderPages).sort((a, b) => a - b);
    const result: (number | '...')[] = [];
  
    for (let i = 0; i < sortedPages.length; i++) {
      const current = sortedPages[i];
      const prev = sortedPages[i - 1];
  
      if (i > 0 && current - prev > 1) {
        result.push('...');
      }
  
      result.push(current);
    }
  
    return result;
  }
 
  return (
    <div className={styles.containerbuttons}>
      <button
        onClick={goToPreviousPage}
        className={styles.arrowButton}
        disabled={page <= 1}
      >
        &lt;
      </button>

      {getPaginationRange().map((item, idx) => {
        if (item === '...') {
          return (
            <span key={"ellipsis-" + idx} className={styles.buttons} style={{ cursor: 'default' }}>
              ...
            </span>
          );
        }
        return (
          <button
            key={item}
            onClick={() => setPage(Number(item) - 1)}
            className={`${styles.buttons} ${page === Number(item) ? styles.activeButton : ''}`}
            disabled={page === Number(item)}
          >
            {item}
          </button>
        );
      })}

      <button
        onClick={goToNextPage}
        className={styles.arrowButton}
        disabled={page >= totalPages}
      >
        &gt;
      </button>
    </div> 
  )
}
