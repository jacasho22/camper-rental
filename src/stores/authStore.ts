import { defineStore } from 'pinia';
import { auth } from '../firebase/config';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
// Definimos la interfaz User localmente para evitar problemas de importación
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAdmin: boolean;
}
// import { sampleUsers } from '../data/sampleData';

// Flag para determinar si se usa Firebase o datos de ejemplo
const useFirebase = false; // Cambiar a true cuando Firebase esté configurado correctamente

// Datos del administrador
const adminUser: User = {
  uid: 'admin123',
  email: 'admin@camperrental.com',
  displayName: 'Administrador',
  photoURL: null,
  isAdmin: true
};

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): UserState => ({
    user: null,
    loading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user
  },
  
  actions: {
    init() {
      if (useFirebase) {
        // Escuchar cambios en el estado de autenticación con Firebase
        onAuthStateChanged(auth, (user) => {
          this.user = user ? { ...user, isAdmin: false } as User : null;
        });
      } else {
        // Simular usuario autenticado con datos de ejemplo
        // Descomenta la siguiente línea para simular un usuario ya autenticado
        // this.user = sampleUsers[0];
        console.log('Usando datos de ejemplo para autenticación');
      }
    },
    
    async register(email: string, password: string, displayName: string) {
      this.loading = true;
      this.error = null;
      
      try {
        if (useFirebase) {
          // Aquí iría la implementación real con Firebase
          // Por ahora, simulamos un registro exitoso
          console.log('Registro simulado para:', email, password, displayName);
        } else {
          // Simular registro con datos de ejemplo
          this.user = {
            uid: `user_${Date.now()}`,
            email,
            displayName,
            photoURL: null,
            isAdmin: false
          };
          console.log('Usuario registrado (simulado):', this.user);
        }
      } catch (err: any) {
        this.error = err.message || 'Error al registrar usuario';
        console.error('Error de registro:', err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
    
    // Ya no permitimos registro de usuarios, solo el administrador puede iniciar sesión
    
    async login(email: string, password: string) {
      this.loading = true;
      this.error = null;
      
      try {
        if (useFirebase) {
          // En una implementación real, verificaríamos si el usuario es administrador en la base de datos
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          
          // Verificar si es el administrador (en un entorno real, esto se haría con roles en la base de datos)
          if (email !== 'admin@camperrental.com') {
            throw { code: 'auth/not-admin' };
          }
          
          // Añadir propiedad isAdmin al usuario
          const adminUser = {
            ...userCredential.user,
            isAdmin: true
          } as User;
          
          this.user = adminUser;
          return adminUser;
        } else {
          // Simular login con datos de ejemplo
          await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay de red
          
          // Solo permitir login del administrador
          if (email !== adminUser.email) {
            throw { code: 'auth/not-admin' };
          }
          
          // En un entorno de ejemplo, aceptamos cualquier contraseña que no esté vacía
          if (!password || password.length < 6) {
            throw { code: 'auth/wrong-password' };
          }
          
          this.user = adminUser;
          return adminUser;
        }
      } catch (error: any) {
        this.error = this.handleAuthError(error.code);
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async logout() {
      try {
        if (useFirebase) {
          await signOut(auth);
        } else {
          // Simular logout con datos de ejemplo
          await new Promise(resolve => setTimeout(resolve, 500)); // Simular delay de red
        }
        this.user = null;
      } catch (error: any) {
        this.error = this.handleAuthError(error.code);
        throw error;
      }
    },
    
    handleAuthError(errorCode: string): string {
      switch (errorCode) {
        case 'auth/email-already-in-use':
          return 'Este correo electrónico ya está en uso';
        case 'auth/invalid-email':
          return 'Correo electrónico inválido';
        case 'auth/user-disabled':
          return 'Usuario deshabilitado';
        case 'auth/user-not-found':
          return 'Usuario no encontrado';
        case 'auth/wrong-password':
          return 'Contraseña incorrecta';
        case 'auth/weak-password':
          return 'La contraseña debe tener al menos 6 caracteres';
        case 'auth/not-admin':
          return 'Solo el administrador puede iniciar sesión';
        default:
          return 'Error de autenticación';
      }
    }
  }
});