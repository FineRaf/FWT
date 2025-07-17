import { SearchBarSection } from '../SearchBar/SearchBarSection';
import { useSearch } from '../../hooks/useSearch';
import styles from './style.module.scss';

export function SearchSection() {
    const { search, setSearch } = useSearch();

    return (
        <div className={styles.searchSection}>
            <div className={styles.container}>
                <SearchBarSection
                    value={search}
                    onChange={setSearch}
                    placeholder="Painting title..."
                />
            </div>
        </div>
    );
} 
