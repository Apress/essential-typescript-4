<template>
    <ProductList />
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";
import ProductList from "./views/ProductList.vue";
import { HttpHandler } from "./data/httpHandler";
import { useStore } from "vuex";

export default defineComponent({
    name: "App",
    components: { ProductList },
    setup() {
        const store = useStore();
        const handler = new HttpHandler();
        onMounted(() => store.dispatch("loadProducts", handler.loadProducts));
    }
});

</script>
