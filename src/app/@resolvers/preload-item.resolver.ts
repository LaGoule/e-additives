import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DatabaseService } from '../@services/database.service';

export const preloadItemResolver: ResolveFn<any> = async (route) => {
  const service = inject(DatabaseService);
  const id = route.paramMap.get('id');
  if (!id) {
    throw new Error('Invalid nav param');
  }
  const item = await service.getItems(id);
  return item;
};
