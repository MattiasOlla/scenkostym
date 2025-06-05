<script lang="ts">
  import ProfileCard from "$components/ProfileCard.svelte";
  import { people } from "$lib/people";
</script>

<svelte:head>
  <title>Scenkostym 2025</title>
</svelte:head>

<h1 class="page-title">Scenkostym och historiska dräkter</h1>

<div class="profile-container">
  {#each people as person (person.name)}
    <ProfileCard {...person} />
  {/each}
</div>
