import { RouteRecordRaw } from 'vue-router';
import DropdownTest from '../views/pages/dropdown-test.vue';
import SelectTest from '../views/pages/select-test.vue';

const menus: Array<RouteRecordRaw> = [
  {
    path: '/dropdown',
    name: 'dropdown',
    component: DropdownTest,
  },
  {
    path: '/select',
    name: 'select',
    component: SelectTest,
  },
];

export default menus;
