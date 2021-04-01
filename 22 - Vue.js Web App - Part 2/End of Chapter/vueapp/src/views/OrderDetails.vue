<template>
    <div>
        <h3 class="text-center bg-primary text-white p-2">Order Summary</h3>
        <div class="p-3">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th><th>Product</th>
                        <th class="text-right">Price</th>
                        <th class="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="line in order.lines" v-bind:key="line.product.id">
                        <td>{{ line.quantity }}</td>
                        <td>{{ line.product.name }}</td>
                        <td class="text-right">
                            ${{ line.product.price.toFixed(2) }}
                        </td>
                        <td class="text-right">
                            ${{ line.total.toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th class="text-right" colSpan="3">Total:</th>
                        <th class="text-right">
                            ${{ order.total.toFixed(2) }}
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="text-center">
            <router-link to="/products" class="btn btn-secondary m-1">
                Back
            </router-link>
            <button class="btn btn-primary m-1" @click="submit">
                Submit Order
            </button>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, } from "vue";
import { Order } from "../data/entities";
import { HttpHandler } from '../data/httpHandler';
import { mapState, mapActions } from "vuex";
import { StoreState } from "../store";

export default defineComponent({
    name: "OrderDetails",
    computed: {
        ...mapState<StoreState>({
            order: (state: StoreState) => state.order
        })
    },
    methods: {
        ...mapActions(["storeOrder"]),
        submit() {
            this.storeOrder((order: Order) => {
                return new HttpHandler().storeOrder(order).then(id => {
                    this.$router.push("/summary");
                    return id;
                });
            });
        }
    }
})

</script>
