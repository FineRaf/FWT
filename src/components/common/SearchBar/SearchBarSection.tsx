import React from 'react';
import styles from './style.module.scss';

type SearchBarSectionProps = {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  style?: React.CSSProperties;
};

export const SearchBarSection: React.FC<SearchBarSectionProps> = ({ 
  value, 
  onChange, 
  className, 
  onFocus, 
  onBlur, 
  placeholder = 'Painting title...', 
  style 
}) => {
  return (
    <div className={[styles.searchBarSection, className].join(' ')} style={style}>
      <div className={styles.searchBar}>
        <span className={styles.icon}>
          <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="7" stroke="var(--search-icon-color)" strokeWidth="2" />
            <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="var(--search-icon-color)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}; 
