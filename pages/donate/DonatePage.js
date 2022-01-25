import { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PrimaryButton } from '../../components/Button';
import Form from '../../components/Form';
import { EmailInput, RadioInput, TextInput } from '../../components/Input';
import SiteLayout from '../../components/SiteLayout';
import Typography from '../../components/Typography';

const contributionTiers = [
  {
    name: 'Angel',
    amount: 1000,
  },
  {
    name: 'Benefactor',
    amount: 500,
  },
  {
    name: 'Sponsor',
    amount: 250,
  },
  {
    name: 'Supporter',
    amount: 100,
  },
  {
    name: 'Friend',
    amount: 50,
  },
];

const actions = {
  change: 'change',
};

const fieldReducer = (field, state, action) => {
  switch (action.type) {
    case actions.change:
      return { ...state, [field]: action.payload };
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  if (action.field) {
    return fieldReducer(action.field, state, action);
  }

  switch (action.type) {
    default:
      return state;
  }
};

const initialFieldState = '';

const initialFormState = {
  firstName: initialFieldState,
  lastName: initialFieldState,
  behalf: initialFieldState,
};

const ContributionTier = ({ amount, name }) => (
  <RadioInput
    type="radio"
    name="contribution"
    id={name.toLowerCase()}
    label={`$${amount}.00 (${name})`}
    value={amount}
  />
);

ContributionTier.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

// https://github.com/stripe/react-stripe-js/blob/master/src/index.ts
// https://stripe.com/docs/js/elements_object/create_element?type=card
export const DonatePage = ({ stripeKey }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const stripe = useMemo(() => loadStripe(stripeKey), [stripeKey]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: actions.change, field: name, payload: value });
  };

  return (
    <SiteLayout className="gutters" pathname="/donate">
      <Elements stripe={stripe}>
        <Form onSubmit={onSubmit}>
          <Typography>Your Email*</Typography>
          <EmailInput type="email" />

          <fieldset>
            <Typography>Your Contribution*</Typography>
            {contributionTiers.map(({ amount, name }) => {
              return <ContributionTier key={name} name={name} amount={amount} />;
            })}
            <RadioInput type="radio" name="contribution" id="other" label="Other Amount" />
          </fieldset>

          <Typography>Additional Information</Typography>
          <TextInput
            type="text"
            label="First Name"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            required
          />

          <TextInput
            type="text"
            label="Last Name"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            required
          />

          <TextInput
            type="text"
            label="On Behalf of"
            name="behalf"
            value={state.behalf}
            onChange={handleChange}
            helpText="If you are making this donation on behalf of a company or in honor of someone else."
          />

          <label htmlFor="card-details">
            Card details
            <CardElement id="card-details" options={{}} />
          </label>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Form>
      </Elements>
    </SiteLayout>
  );
};

DonatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  stripeKey: PropTypes.string.isRequired,
};

DonatePage.defaultProps = {
  /** The test key used in the Stripe docs */
  // TODO: Set with real key
  // TODO: Add test key to local vars
  stripeKey: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
};
