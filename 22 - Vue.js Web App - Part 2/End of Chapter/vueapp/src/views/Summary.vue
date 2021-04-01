<template>
            
<div class="m-2 text-center">
            <h2>Thanks!</h2>
            <p>Thanks for placing your order.</p>
            <p>Your order is #{{ id }}</p>
            <p>We'll ship your goods as soon as possible.</p>
            <router-link to="/products" class="btn btn-primary">OK</router-link>
        </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { mapState } from "vuex";
import { StoreState } from "../store";

export default defineComponent({
    name: "Summary",
    computed: {
        ...mapState<StoreState>({
            id: (state: StoreState) => state.storedId
        })
    }
})

</script>
