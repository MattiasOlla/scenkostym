<script lang="ts">
  import type { Person } from "../lib/people";

  let { name, email, instagram, imageUrl }: Person = $props();

  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .toUpperCase();
</script>

<div class="profile-card">
  <div class="background-image"></div>

  <div class="headshot">
    {#if imageUrl}
      <img src={imageUrl} alt="{name} profile picture" />
    {:else}
      {initials}
    {/if}
  </div>

  <div class="profile-content">
    <h2 class="name">{name}</h2>
    <div class="social-links">
      {#if email}
        <a href="mailto:{email}" class="social-link email" title="Email {name}" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      {/if}
      {#if instagram}
        <a
          href="https://instagram.com/{instagram}"
          class="social-link instagram"
          title="Follow {name} on Instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  .profile-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    width: 100%;
    position: relative;
    transition: transform 0.3s ease;
  }

  .profile-card:hover {
    transform: translateY(-5px);
  }

  .background-image {
    height: 150px;
    background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    position: relative;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .headshot {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid white;
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
    font-weight: bold;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .headshot img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .profile-content {
    padding: 80px 30px 30px;
    text-align: center;
  }

  .name {
    font-size: 28px;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 30px;
    letter-spacing: -0.5px;
  }

  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 15px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .social-link.email {
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  .social-link.instagram {
    background: linear-gradient(135deg, #f093fb, #f5576c);
  }

  .social-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .social-link::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  .social-link:hover::before {
    left: 100%;
  }

  @media (min-width: 768px) {
    .background-image {
      height: 180px;
    }

    .headshot {
      width: 140px;
      height: 140px;
      top: 110px;
      font-size: 56px;
    }

    .profile-content {
      padding: 90px 40px 40px;
    }

    .name {
      font-size: 32px;
    }

    .social-link {
      width: 60px;
      height: 60px;
      font-size: 24px;
    }
  }
</style>
