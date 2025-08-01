"use client";

import type { DriveItem } from "@/types";
import { DriveItemCard } from "./drive-item-card";

type DriveItemGridProps = {
    items: DriveItem[];
    onFolderClick: (folderId: string) => void;
    onDeleteClick: (item: DriveItem) => void;
};

export function DriveItemGrid({ items, onFolderClick, onDeleteClick }: DriveItemGridProps) {
  
  const onItemClick = (item: DriveItem) => {
    if (item.type === 'folder') {
      onFolderClick(item.id);
    } else {
      // In a real app, this would open the file viewer
      alert(`Opening file: ${item.name}`);
    }
  };

  if (items.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-64 text-center rounded-lg border-2 border-dashed">
            <h3 className="text-lg font-semibold">Folder ini kosong</h3>
            <p className="text-muted-foreground">Upload file atau buat folder baru untuk memulai.</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {items.map((item) => (
        <DriveItemCard 
          key={item.id} 
          item={item} 
          onItemClick={onItemClick} 
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
