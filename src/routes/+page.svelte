<script lang="ts">
  import ProfileCard from "$components/ProfileCard.svelte";
  import { people } from "$lib/people";

  import { page } from "$app/state";
  const titleSuffix = ["localhost", "127.0.0.1"].includes(page.url.hostname) ? " (DEV)" : "";
</script>

<svelte:head>
  <title>Scenkostym 2025{titleSuffix}</title>
</svelte:head>

<h1 class="page-title">Scenkostym och historiska dräkter</h1>

<div class="profile-container">
  {#each people as person (person.name)}
    <ProfileCard {...person} />
  {/each}
</div>
