<template>
  <div class="homepage">
    <div class="homepage-image">
      <div class="image-container">
        <img
          src="~assets/img/homepage/note.png"
          alt="Petites illustrations faisant penser a la musique"
        />
      </div>
    </div>
    <div class="homepage-content">
      <h2 class="homepage-content__title">
        Challenge tes amis<br />en musique
      </h2>
      <p class="homepage-content__desc">
        Expose tes talents musicaux aux autres et montre qui est le meilleur en
        Blindtest...
      </p>
      <ButtonRegular text="Créer une partie" />
      <ButtonRegular text="J’ai déjà un code" theme="blue" />
      <p class="homepage-content__publicGame">
        <Icon icon="DoubleArrowLeftRight" />
        Rejoindre une partie publique
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "homepage",
};
</script>

<style lang="scss">
.homepage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0 $pad-s;

  &-image {
    width: 100%;
    display: flex;
    justify-content: center;
    max-height: 320px;
    img {
      max-width: 100%;
      max-height: 320px;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__title {
      font-size: 38px;
      color: $light;
      text-align: center;
      letter-spacing: 1.3px;
    }

    &__desc {
      margin: $pad-s 0;
      color: $light;
      font-size: 16px;
      text-align: center;
      font-weight: 300;
      width: 80%;
    }

    &__publicGame {
      display: flex;
      align-items: center;
      color: $light;
      padding-top: $pad-s;

      .single-icon {
        margin-right: $pad-xxs;
      }
    }
  }

  @include min-xs {
    &-image {
      max-height: 350px;
      img {
        max-height: 350px;
      }
    }
  }

  @include min-m {
    flex-direction: row;
    align-items: center;
    padding: 0 $pad-l;

    &-image {
      order: 2;
      width: 50%;
      max-height: 600px;
      img {
        max-height: 600px;
      }
    }

    &-content {
      width: 50%;
      padding-top: $pad-l;
      justify-content: flex-start;
      align-items: flex-start;

      &__title {
        text-align: left;
        font-size: 50px;
        width: 100%;
      }

      &__desc {
        text-align: left;
        width: 100%;
        margin-bottom: $pad-l;
      }

      .button-regular {
        margin-left: 0;
        margin-right: 0;
      }

      &__publicGame {
        padding-top: $pad-m;
      }
    }
  }

  @include min-xl {
    &-image {
      max-height: 650px;
      img {
        max-height: 650px;
      }
    }
  }
}
</style>
