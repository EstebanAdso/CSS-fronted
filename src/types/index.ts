/* Tipos globales para la API de CompuServicesSoft */

export type Categoria = {
  id: number;
  nombre: string;
  descripcion: string | null;
  descripcionGarantia: string | null;
};

export type Producto = {
  id: number;
  nombre: string;
  cantidad: number;
  precioVendido: number;
  imagen: string;
  descripcion: string;
  categoria: Categoria;
};

export type PaginatedResponse<T> = {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: { sorted: boolean; unsorted: boolean };
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
  /* Algunos endpoints retornan estos campos en el nivel raíz */
  size?: number;
  number?: number;
};
