<script>
	export let icon = '';
	export let label = 'link';
	export let href = '/';
</script>

<a {href} {...$$restProps}>
	<slot>
		<img src={icon} alt="" />
		<p>{label}</p>
	</slot>
</a>
