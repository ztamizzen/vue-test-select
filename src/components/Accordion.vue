<template>
    <section class="accordions faq">
        <b-form inline class="justify-content-md-center p-3">
            <label class="mx-sm-2" for="inlineFormCustomSelectPref">Preferences</label>
            <b-form-select class="mb-2 mx-sm-2 mb-sm-0"
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="inlineFormCustomSelectPref">
                <option slot="first" :value="null">Choose&hellip;</option>
            </b-form-select>
            <b-form-input class="mx-sm-2" />
            <b-form-checkbox class="mb-2 mx-sm-2 mb-sm-0">
                Remember my preference
            </b-form-checkbox>
            <b-button variant="primary">Save</b-button>
        </b-form>
        <accordion-item>
            <h3 slot="header">Var har hänt?</h3>
            <p>Vi var tidigt ute med information om att det fanns en risk för att vi inte skulle komma överens med en av våra tv-leverantörer Discovery, för att du och alla våra tv-kunder skulle veta om vad som pågick och varför. Tyvärr enades vi inte – vilket resulterade i att vi inte längre hade tillåtelse att sända Discoverys kanaler från och med 8 juni. Du fick då tills vidare ett nytt innehåll.</p>
            <p>Det har varit en tuff förhandling! Vi är uppriktigt ledsna över att våra kunder har kommit i kläm. Vi har jobbat hårt under en väldigt lång tid och in i det sista för att hitta en lösning som inte innebär försämringar för dig som tv-kund. Vi är därför jätteglada över att kunna berätta att vi nu är överens om ett nytt avtal.</p>
        </accordion-item>
        <accordion-item>
            <h3 slot="header">Vilka kanaler har det rört sig om?</h3>
            <p>Vi kanaler som nu kommer tillbaka är:</p>
            <p>Kanal 5<br>
                Kanal 9<br>
                Kanal 11<br>
                Eurosport 1<br>
                Eurosport 2<br>
                Discovery Channel<br>
                Discovery Science<br>
                Discovery World<br>
                Discovery ID<br>
                TLC<br>
                Animal Planet</p>
            <p><em>Detta gäller även motsvarande HD-kanaler.</em></p>
            <p><a href="https://www.telia.se/privat/tv/tvpaket" target="_blank">Klicka här</a> för att se vilka kanaler som ingår i just ditt tv-paket. <a href="http://www.telia.se/privat/mitt-telia/abonnemang/valj/tv" target="_blank">Logga in på Mitt Telia</a> om du är osäker på vilket tv-paket du har, eller kolla på din tv-faktura.</p>
        </accordion-item>
        <accordion-item>
            <h3 slot="header">När kommer kanalerna tillbaka?</h3>
            <p>De kommer tillbaka löpande i din tv 9 juni, på samma kanalplatser som tidigare. Starta om tv-boxen om du inte hittar dem.</p>
        </accordion-item>
        <accordion-item>
            <h3 slot="header">Vad innebär det nya avtalet?</h3>
            <p>Det innebär att vi kan fortsätta leverera Sverige bästa tv-tjänst på bra villkor.</p>
        </accordion-item>
    </section>
</template>

<script>
import AccordionItem from "@/components/AccordionItem";

export default {
  name: "Accordion",
  components: {
    AccordionItem
  },
  computed: {
    accordionClasses() {
      return "test häst galopp";
    }
  }
};
</script>
<style lang="scss">
.accordions {
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
}
</style>
