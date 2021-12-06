<script lang="ts">
import type { Product } from '../models/Product';
import ProductHighlight from '../components/Landing/ProductHighlight.svelte'
let products: Product[];
</script>

<div class="product-panels">
 {#each products as Product}
    <ProductHighlight/>
 {/each}
</div>

<style>

</style>