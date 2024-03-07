import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DatabaseService } from '../@services/database.service';
import { Router,  } from '@angular/router';

export const preloadItemResolver: ResolveFn<any> = async (route) => {
  const _service = inject(DatabaseService);
  const _router = inject(Router);

  const id = route.paramMap.get('id');
  if (!id) {
    throw new Error('Invalid nav param');
  }
  const item = await _service.getItems(id);
  if (!item) {
    alert('Additif non trouvé: "E-' + id + '".');
    _router.navigateByUrl('');
    return null;
  }
  return item;
};
