// Definición de la interfaz Camper para uso local
export interface Camper {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  images: string[];
  capacity: number;
  features: string[];
  available: boolean;
  rating?: number;
  reviews?: Review[];
}

// Definición de la interfaz Review para uso local
export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

// Definición de la interfaz User para uso local
export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

// Datos de ejemplo para usuarios
export const sampleUsers: User[] = [
  {
    uid: 'user1',
    email: 'usuario@ejemplo.com',
    displayName: 'Usuario Ejemplo',
    photoURL: null
  },
  {
    uid: 'user2',
    email: 'admin@ejemplo.com',
    displayName: 'Administrador',
    photoURL: null
  }
];

// Datos de ejemplo para campers
export const sampleCampers: Camper[] = [
  {
    id: '1',
    name: 'Volkswagen California Ocean',
    description: 'Camper van compacta y versátil, perfecta para parejas o familias pequeñas. Equipada con cocina completa, nevera, calefacción, aire acondicionado y cama doble. Ideal para aventuras por la costa o montaña con bajo consumo de combustible y fácil manejo.',
    location: 'Madrid',
    price: 95,
    images: [
      'https://images.unsplash.com/photo-1533591362725-979dfce672b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80',
      'https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    ],
    capacity: 4,
    features: ['Cocina completa', 'Nevera', 'Calefacción', 'Aire acondicionado', 'Ducha exterior', 'Toldo lateral', 'Conexión eléctrica', 'Agua caliente'],
    available: true,
    rating: 4.9,
    reviews: [
      {
        id: '101',
        userId: 'user1',
        userName: 'Carlos Martínez',
        rating: 5,
        comment: 'Excelente camper, muy cómoda y fácil de conducir. Perfecta para nuestra escapada de fin de semana por la costa.',
        date: new Date('2023-06-15')
      },
      {
        id: '102',
        userId: 'user2',
        userName: 'Laura Gómez',
        rating: 5,
        comment: 'Increíble experiencia. La camper está en perfecto estado y tiene todo lo necesario para disfrutar de la naturaleza con todas las comodidades.',
        date: new Date('2023-07-22')
      },
      {
        id: '103',
        userId: 'user3',
        userName: 'Miguel Sánchez',
        rating: 4.5,
        comment: 'Viajamos en familia y fue una experiencia inolvidable. Los niños disfrutaron muchísimo y la camper es muy fácil de conducir incluso para principiantes.',
        date: new Date('2023-08-10')
      }
    ]
  }
];