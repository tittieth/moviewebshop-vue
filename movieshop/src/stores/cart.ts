import type { ICart } from "@/models/ICart";
import { ref } from "vue";

export const cart = ref<ICart[]>([]);