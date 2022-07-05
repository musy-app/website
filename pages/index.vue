<template>
  <div class="homepage">
    <!-- <h2>{{ $t("devMode") }}</h2> -->

    <!-- HERO -->
    <div class="hero">
      <div class="hero__img">
        <img src="../assets/img/homepage/note.png" alt="note de musique" />
      </div>
      <div class="hero__content">
        <h2 class="hero__title">{{ $t("index.title") }}</h2>
        <p class="hero__desc">
          {{ $t("index.desc") }}
        </p>

        <ButtonRegular
          class="button--create-game"
          :text="$t('index.button.createGame')"
        />
        <ButtonRegular
          class="button--join-game"
          :text="$t('index.button.alreadyHaveGame')"
          theme="darkblue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "homepage",
};
</script>

<style lang="scss">
h2 {
  text-align: center;
  color: $light;
}

.homepage {
  .hero {
    @include min-m {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 90vw;
      }

      @include min-m {
        order: 2;
        width: 50%;
        img {
          max-width: 40vw;
        }
      }
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: $light;
      padding: 0 $pad-s;

      @include min-m {
        order: 1;
        width: 50%;
        align-items: flex-start;
      }
    }

    &__title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: $pad-s;

      @include min-m {
        font-size: 4rem;
        text-align: left;
      }
    }

    &__desc {
      text-align: center;
      margin-bottom: $pad-m;

      @include min-m {
        margin-bottom: $pad-l;
        text-align: left;
      }
    }

    .button--create-game {
      margin-bottom: $pad-xs;
    }
  }
}
</style>
