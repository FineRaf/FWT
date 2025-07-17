import type { Painting } from "../../../types/painting";
import { useAuthors } from "../../hooks/useAuthors";
import { useLocation } from "../../hooks/useLocation";
import styles from './style.module.scss'
import cn from 'classnames';
import { useState } from 'react';

export function PaintingCard({authorId, created, imageUrl, locationId, name, className}: Painting & {className?: string}){
  const {data: authorData} = useAuthors()
  const {data: locationData} = useLocation()
  const authorName = authorData?.data?.find(author => author.id === authorId)?.name ?? ''
  const locationName = locationData?.data?.find(location => location.id === locationId)?.location ?? ''
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-color="dark"
      data-size="1440"
      data-state="defoult"
      className={cn(styles.paintingCard, className, { [styles.zoom]: hovered })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className={styles.paintingImage} src={'https://test-front.framework.team/'+imageUrl} alt={name} />
      <div className={styles.paintingInfoBg} />
      <div className={styles.paintingYear}>{created}</div>
      <div className={styles.paintingName}>{name}</div>
      <div className={cn(styles.paintingLocation, { [styles.showSide]: hovered })}>{locationName}</div>
      <div className={cn(styles.paintingAuthor, { [styles.showSide]: hovered })}>{authorName}</div>
      <div className={styles.paintingLine}></div>
    </div>
  );
}
