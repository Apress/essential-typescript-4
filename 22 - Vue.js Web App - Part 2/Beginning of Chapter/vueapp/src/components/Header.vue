<template>
            
    <div class="p-1 bg-secondary text-white text-right">
        {{ displayText }} 
        <button class="btn btn-sm btn-primary m-1">
            Submit Order
        </button>
    </div>

</template>

<script lang="ts">

import { defineComponent, PropType} from "vue";
import { Order } from "../data/entities";
import { useStore } from "vuex";

export default defineComponent({
    name: "Header",
    setup() {
        return { store:  useStore() }
    },
    // props: {
    //     order: {
    //         type: Object as PropType<Order>,
    //         required: true
    //     }
    // },
    computed: {
        displayText(): string {
            const count = this.store.state.order.productCount;
            return count === 0 ? "(No Selection)" 
                : `${ count } product(s), ` 
                    + `$${ this.store.state.order.total.toFixed(2)}`;
        }        
    }
})
</script>
