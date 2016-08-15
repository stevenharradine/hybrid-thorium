<template>
  <section class="hy_c-module hy_t-grey">
   <div class="hy_o-wrapper">
     <h2 class="hy_c-headline hy_c-headline--h3 hy_t-grey">Tab</h2>
     <hr class="hy_u-space-mb-2">
     <h3 class="hy_c-headline hy_c-headline--h4 hy_t-grey">Example</h3>
     <div class="sg_c-demo hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">
         <div class="sg_c-demo__container">
           <tabs class="c-price-lookup hy_o-layout__item  hy_u-size-3of3@sm hy_u-size-3of4@md hy_u-size-4of12@lg">
             <tab label="Tab 1">
              <p>
                Tab 1 content
              </p>
             </tab>
             <tab label="Tab 2">
               <p>
                 Tab 2 content
               </p>
             </tab>
           </tabs>
         </div>
        <div class="sg_c-demo__snippet">
          <p>
            HTML
          </p>
          <pre>
            <code class="language-html">
&lt;tabs&gt;
  &lt;tab label="Tab 1"&gt;
    &lt;p&gt;
      Tab 1 content
    &lt;/p&gt;
  &lt;/tab&gt;
  &lt;tab label="Tab 2"&gt;
    &lt;p&gt;
      Tab 2 content
    &lt;/p&gt;
  &lt;/tab&gt;
&lt;/tabs&gt;
            </code>
          </pre>
        </div>
      </div>
      <h3 class="hy_c-headline hy_c-headline--h4 hy_t-grey">API</h3>
      <div class="hy_o-layout hy_o-layout--with-gutter hy_o-layout--flushed">

        <table class="sg_c-api-table">
          <tr>
            <th>
              Name
            </th>
            <th>
              Type
            </th>
            <th>
              Required
            </th>
            <th>
              Default
            </th>
            <th>
              Description
            </th>
          </tr>
          <tr>
            <td>
              Label
            </td>
            <td>
              String
            </td>
            <td>
              true
            </td>
            <td>
              n/a
            </td>
          </tr>

          <tr>
            <td>
              isDisabled
            </td>
            <td>
              Boolean
            </td>
            <td>
              false
            </td>
            <td>
              false
            </td>
          </tr>
        </table>
      </div>

   </div>
  </section>
</template>

<script>

export default {
};
</script>
