import { createRouter, createWebHistory } from 'vue-router';

// Lazy loading routes for better performance
const Home = () => import('@/views/Home.vue');
const CamperDetails = () => import('@/views/CamperDetails.vue');
const Login = () => import('@/views/Login.vue');
const Admin = () => import('@/views/Admin.vue');
const Reservations = () => import('@/views/Reservations.vue');
const NotFound = () => import('@/views/NotFound.vue');
const PrivacyPolicy = () => import('@/views/PrivacyPolicy.vue');
const CookiePolicy = () => import('@/views/CookiePolicy.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Inicio - Alquiler de Campers' }
  },
  {
    path: '/camper/:id',
    name: 'CamperDetails',
    component: CamperDetails,
    meta: { title: 'Detalles del Camper' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Iniciar Sesión' }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { title: 'Panel de Administración' }
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations,
    meta: { title: 'Mis Reservas' }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: { title: 'Política de Privacidad - TuCamper.com' }
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicy,
    meta: { title: 'Política de Cookies - TuCamper.com' }
  },
  {    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Página no encontrada' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Siempre vuelve al inicio cuando se cambia de página
    return { top: 0 }
  }
});

// Cambiar el título de la página según la ruta
router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string || 'Alquiler de Campers';
  next();
});

export default router;