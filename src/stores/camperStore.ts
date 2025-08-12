import { defineStore } from 'pinia';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { sampleCampers } from '../data/sampleData';

// Definimos la interfaz Camper localmente para evitar problemas de importación
interface Camper {
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

// Definimos la interfaz Review localmente
interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
}

export const useCamperStore = defineStore('campers', {
  state: () => ({
    campers: [] as Camper[],
    loading: false,
    error: null as string | null,
    selectedCamper: null as Camper | null,
    useFirebase: false // Cambiar a true cuando Firebase esté configurado
  }),
  
  getters: {
    availableCampers: (state) => state.campers.filter(camper => camper.available),
    getCamperById: (state) => (id: string) => state.campers.find(camper => camper.id === id)
  },
  
  actions: {
    async fetchCampers() {
      this.loading = true;
      this.error = null;
      
      try {
        if (this.useFirebase) {
          // Usar Firebase cuando esté configurado
          const campersCollection = collection(db, 'campers');
          const campersSnapshot = await getDocs(campersCollection);
          
          this.campers = campersSnapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() } as Camper;
          });
        } else {
          // Usar datos de ejemplo mientras tanto
          // Simulamos una carga asíncrona
          await new Promise(resolve => setTimeout(resolve, 500));
          this.campers = [...sampleCampers];
        }
      } catch (error) {
        this.error = 'Error al cargar los campers';
        console.error('Error fetching campers:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async fetchCamperById(id: string) {
      this.loading = true;
      this.error = null;
      
      try {
        if (this.useFirebase) {
          // Usar Firebase cuando esté configurado
          const camperDoc = doc(db, 'campers', id);
          const camperSnapshot = await getDoc(camperDoc);
          
          if (camperSnapshot.exists()) {
            this.selectedCamper = { id: camperSnapshot.id, ...camperSnapshot.data() } as Camper;
          } else {
            this.error = 'Camper no encontrado';
            this.selectedCamper = null;
          }
        } else {
          // Usar datos de ejemplo mientras tanto
          // Simulamos una carga asíncrona
          await new Promise(resolve => setTimeout(resolve, 500));
          const camper = sampleCampers.find(c => c.id === id);
          
          if (camper) {
            this.selectedCamper = camper;
          } else {
            this.error = 'Camper no encontrado';
            this.selectedCamper = null;
          }
        }
      } catch (error) {
        this.error = 'Error al cargar el camper';
        console.error('Error fetching camper:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async searchCampers(searchTerm: string) {
      this.loading = true;
      this.error = null;
      
      try {
        if (this.useFirebase) {
          // En una implementación real, esto sería una consulta más sofisticada
          // Por ahora, simplemente filtramos los campers ya cargados
          if (this.campers.length === 0) {
            await this.fetchCampers();
          }
          
          const lowerSearchTerm = searchTerm.toLowerCase();
          this.campers = this.campers.filter(camper => 
            camper.name.toLowerCase().includes(lowerSearchTerm) ||
            camper.description.toLowerCase().includes(lowerSearchTerm) ||
            camper.location.toLowerCase().includes(lowerSearchTerm)
          );
        } else {
          // Usar datos de ejemplo mientras tanto
          // Simulamos una carga asíncrona
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Si el término de búsqueda está vacío, mostrar todos los campers
          if (!searchTerm.trim()) {
            this.campers = [...sampleCampers];
          } else {
            // Filtrar por término de búsqueda (ignorando mayúsculas/minúsculas)
            const lowerSearchTerm = searchTerm.toLowerCase().trim();
            this.campers = sampleCampers.filter(camper => 
              camper.name.toLowerCase().includes(lowerSearchTerm) ||
              camper.description.toLowerCase().includes(lowerSearchTerm) ||
              camper.location.toLowerCase().includes(lowerSearchTerm)
            );
          }
        }
      } catch (error) {
        this.error = 'Error en la búsqueda';
        console.error('Error searching campers:', error);
      } finally {
        this.loading = false;
      }
    },
    
    async updateCamper(updatedCamper: Camper) {
      this.loading = true;
      this.error = null;
      
      try {
        if (this.useFirebase) {
          // Aquí iría la lógica para actualizar en Firebase
          // Por ahora, solo actualizamos en memoria
        }
        
        // Actualizar el camper en el array local
        const index = this.campers.findIndex(c => c.id === updatedCamper.id);
        if (index !== -1) {
          this.campers[index] = { ...updatedCamper };
          return true;
        } else {
          throw new Error('Camper no encontrado');
        }
      } catch (error) {
        this.error = 'Error al actualizar el camper';
        console.error('Error updating camper:', error);
        return false;
      } finally {
        this.loading = false;
      }
    }
  }
});