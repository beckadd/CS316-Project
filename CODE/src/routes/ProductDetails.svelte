<script lang="ts">
	import Description from 'components/ProductDetails/Description.svelte';
	import ReviewSection from '.components/ProductDetails/ReviewSection.svelte';
	import type { Product } from 'src/models/Product';
	import ImgCarousel from 'src/components/ProductDetails/ImgCarousel.svelte';
	export let product: Product;
</script>

<div>
	<ImgCarousel imgs={product.imgURLs} />
	<Description product={product.description} />
</div>
<ReviewSection product />

<style>
</style>
