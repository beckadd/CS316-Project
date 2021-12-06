<script lang="ts">
	import tilt from '../../animations/tilt.js';
	import type { Product } from '../../models/Product';
	export let product: Product;
</script>

<div class="product-card" use:tilt={{ scale: 1.1, reversed: true }}>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img class="product-img" src={product.featuredImgURL} alt="No product image found" />
	<article class="product-details">
		<title class="product-name">{product.name}</title>
		<p class="product-desc">{product.description}</p>
		<emp class="product-price">{product.getPrice()}</emp>
	</article>
</div>

<style>
	.product-img {
		position: absolute;
		max-width: 100%;
		max-height: 100%;
	}

	.product-name {
		display: absolute;
		text-align: left;
		justify-self: baseline;
		align-self: initial;
	}
</style>
