<template>
  <div>
    <div>
      <!-- Widget Code Begin -->
      <div>
        <h3>Loan Payment Calculator</h3>
        <hr />
        <LoanPaymentCalc />
      </div>

      <div class="calc-doc">
        <h3>Documentation</h3>
        <ul>
          <li>Attr => init-filter-title</li>
          <li>Attr Type => string</li>
          <li>Attr Default => "Monthly Loan Costs"</li>
          <li>Attr Description => To set Filter Title</li>
        </ul>
        <ul>
          <li>Attr => init-interest-rate-token</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "5_1_ARM_RATE_INITIAL_225K"</li>
          <li>
            Attr Description => To set InterestRate Token value and used to
            calculate Loan Payment.
          </li>
        </ul>
        <ul>
          <li>Attr => init-label-loan-amount</li>
          <li>Attr Type => string</li>
          <li>Attr Default => "Loan Amount:"</li>
          <li>Attr Description => To set Loan Amount label text.</li>
        </ul>
        <ul>
          <li>Attr => init-label-interest-rate</li>
          <li>Attr Type => string</li>
          <li>Attr Default => "Interest Rate:"</li>
          <li>Attr Description => To set Interest Rate label text.</li>
        </ul>
        <ul>
          <li>Attr => init-label-loan-term-in-years</li>
          <li>Attr Type => string</li>
          <li>Attr Default => "Loan Term:"</li>
          <li>Attr Description => To set LoanTermInYears label text.</li>
        </ul>
        <ul>
          <li>Attr => init-loan-amount</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "50000"</li>
          <li>
            Attr Description => To set LoanAmount value and used to calculate
            Loan Payment data.
          </li>
        </ul>
        <ul>
          <li>Attr => init-interest-rate</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "0"</li>
          <li>
            Attr Description => To set Interest Rate and used to calculate Loan
            Payment data.
          </li>
        </ul>
        <ul>
          <li>Attr => init-loan-term-in-years</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "30"</li>
          <li>
            Attr Description => To set LoanTerm-InYears value and used to
            calculate Loan Payment data.
          </li>
        </ul>
        <ul>
          <li>Attr => init-amortization-breakdown</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "0"</li>
          <li>
            Attr Description => To show or hide "Amortization Breakdown"
            section, set value to "1" or "0".
          </li>
        </ul>
        <ul>
          <li>Attr => init-disclosure-tokens</li>
          <li>Attr Type => String</li>
          <li>Attr Default => ""</li>
          <li>
            Attr Description => To set Disclosure-Tokens value, which is used to
            redirect user to respective Advertising Disclosures Offers page.
          </li>
        </ul>
        <ul>
          <li>Attr => init-disclosure-Text</li>
          <li>Attr Type => String</li>
          <li>Attr Default => ""</li>
          <li>
            Attr Description => To set Disclosure-Text value, which is used to
            show respective Advertising Disclosures text.
          </li>
        </ul>
        <ul>
          <li>Attr => init-destination-link-or-id</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "ns-calc-loan-payment"</li>
          <li>
            Attr Description => To set redirection spliter-id for "Get Free Loan
            Offers" button.
          </li>
        </ul>
        <ul>
          <li>Attr => init-destination-button-text</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "Get Free Loan Offers"</li>
          <li>
            Attr Description => To set button text which is used to redirect to
            Offers page based on Loan Payment data parameter.
          </li>
        </ul>
        <ul>
          <li>Attr => init-lt-logo</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "0"</li>
          <li>
            Attr Description => To show or hide "Lt-Logo" section, set value to
            "1" or "0"
          </li>
        </ul>
        <ul>
          <li>Attr => init-tooltip-loan-term</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "loan-terms"</li>
          <li>Attr Description => To set Tooltip value for LoanTerm.</li>
        </ul>
        <ul>
          <li>Attr => init-interest-rate-tooltip</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "interest-rate"</li>
          <li>Attr Description => To set Tooltip value for InterestRate.</li>
        </ul>
        <ul>
          <li>Attr => init-loan-amount-tooltip</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "loan-amount"</li>
          <li>Attr Description => To set Tooltip value for Loan Amount.</li>
        </ul>
        <ul>
          <li>Attr => init-loan-term-tooltip</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "loan-terms"</li>
          <li>Attr Description => To set Tooltip value for Loan Term.</li>
        </ul>
        <ul>
          <li>Attr => init-destination-button-css-class</li>
          <li>Attr Type => string</li>
          <li>Attr Default => "btn btn-blue"</li>
          <li>Attr Description => To set Destination Button Css Class.</li>
        </ul>
        <ul>
          <li>Attr => init-loan-term-in-years-list-type</li>
          <li>Attr Type => String</li>
          <li>Attr Default => "mortgage"</li>
          <li>Attr Description => To set LoanTermInYears ListType value.</li>
        </ul>
        <ul>
          <li>Attr => init-destination-target</li>
          <li>Attr Type => String</li>
          <li>Attr Default => ""</li>
          <li>Attr Description => To set Destination Target value.</li>
        </ul>
        <ul>
          <li>Attr => init-fit-sidebar</li>
          <li>Attr Type => Number</li>
          <li>Attr Default => "0"</li>
          <li>
            Attr Description => To set the Calculator in the sidebar template.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LoanPaymentCalc from "~/src/templates/loan-payment/loan-payment-calc.vue";

export default {
  components: {
    LoanPaymentCalc,
  },
};
</script>

<style></style>
