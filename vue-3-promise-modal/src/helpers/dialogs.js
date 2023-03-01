import { openDialog } from "vue3-promise-dialog";
import ConfirmModal from "../components/ConfirmModal.vue";

/**
 * Opens the confirm modal.
 */
export async function confirm(text) {
    return await openDialog(ConfirmModal, { text });
}