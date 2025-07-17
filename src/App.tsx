import { Header } from './components/common/Header/Header';
import { SearchSection } from './components/common/SearchSection/SearchSection';
import { PaintingCard } from './components/common/PaintingCard/PaintingCard';
import styles from './media/app.module.scss';
import { Pagination } from "./components/common/Pagination/Pagination";
import { useContext } from 'react';
import { PaintingsContext } from './components/provider/paintingsContext';
import { useState, useMemo } from 'react';
import { SearchContext } from './components/hooks/useSearch';
import type { Painting } from './types/painting';

export default function App (){
  const {data} = useContext(PaintingsContext)
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!data?.data) return [];
    if (!search.trim()) return data.data;
    const s = search.trim().toLowerCase();
    return data.data.filter((item: object) => {
      const painting = item as Painting;
      return (
        painting.name.toLowerCase().includes(s) ||
        painting.created.toLowerCase().includes(s) ||
        String(painting.authorId).includes(s) ||
        String(painting.locationId).includes(s)
      );
    });
  }, [data, search]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <Header />
      <SearchSection />
      <div className={styles.container} style={{marginTop: '20px'}}>
        {filtered.length === 0 ? (
          <div style={{gridColumn: '1 / -1', textAlign: 'center', marginTop: '48px'}}>
            <div style={{fontSize: '20px', color: 'var(--search-error-color)', fontWeight: 600}}>
              No matches for "{search}"
            </div>
            <div style={{fontSize: '16px', color: 'var(--search-error-color)', marginTop: '8px'}}>
              Please try again with a different spelling or keywords.
            </div>
          </div>
        ) : (
          filtered.map((item: object) => {
            const painting = item as Painting;
            return <PaintingCard key={painting.id} className={styles.paintingCard} {...painting} />;
          })
        )}
      </div>
      {filtered.length > 0 && <Pagination/>}
    </SearchContext.Provider>
  ) 
}
