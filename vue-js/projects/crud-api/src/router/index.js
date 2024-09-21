import { createRouter, createWebHistory } from "vue-router";
import List from "../components/student/List.vue";
import Add from "../components/student/Add.vue";
import Edit from "../components/student/Edit.vue";
import View from "../components/student/View.vue";
import NotFount from "../views/NotFount.vue";

const routes = [
	{
		path: "/",
		name: "list",
		component: List,
	},
	{
		path: "/add",
		name: "add",
		component: Add,
	},
	{
		path: "/edit/:id",
		name: "edit",
		component: Edit,
	},
	{
		path: "/view/:id",
		name: "view",
		component: View,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notFount",
		component: NotFount,
	},
];

let router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,
});

export default router;
