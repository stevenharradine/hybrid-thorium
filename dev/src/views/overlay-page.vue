<template>
  <section class="hy_c-module hy_t-grey">
    <div class="hy_o-wrapper">
      <h2 class="hy_c-headline hy_c-headline--h2 hy_t-grey">Overlay System</h2>
      <hr class="hy_u-space-mb-2">
      <p>
        <button v-overlay-opener="overlay-1" class="hy_c-button hy_c-button--link hy_t-purple" type="button" role="button">
          Open overlay #1 <i class="hy_c-icon hy_c-icon--arrow-right-circled hy_c-button__icon"></i>
        </button>
      </p>
      <p>
        <button v-overlay-opener="overlay-2" class="hy_c-button hy_c-button--link hy_t-purple" type="button" role="button">
          Open overlay #2 <i class="hy_c-icon hy_c-icon--arrow-right-circled hy_c-button__icon"></i>
        </button>
      </p>
    </div>
  </section>

 <overlay-container>
        <overlay overlay-key="overlay-1">
          <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">This is overlay #1</h4>
          <article slot="overlay-body">
              Overlay #1 body
          </article>
        </overlay>
        <overlay overlay-key="overlay-2">
          <h4 class="hy_c-headline hy_c-headline--h4" slot="overlay-header">This is overlay #2</h4>
          <article slot="overlay-body">
              Overlay #2 body
          </article>
        </overlay>
      </overlay-container>
</template>

<script>

export default {
};
</script>
