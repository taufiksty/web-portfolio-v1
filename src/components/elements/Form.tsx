import { ValidationError, useForm } from '@formspree/react';

function Form() {
	const [state, handleSubmit] = useForm('meqboyaz');

	if (state.succeeded) {
		return <p>Thanks for contacting me!</p>;
	}

	return (
		<form
			className="space-y-3"
			onSubmit={handleSubmit}>
			{/* <Name> */}
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Name"
				className="border p-2 font-inter text-[14px] rounded w-full"
			/>
			{/* </Name> */}
			{/* <Email> */}
			<input
				id="email"
				type="email"
				name="email"
				placeholder="Email"
				className="border p-2 font-inter text-[14px] rounded w-full"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			{/* </Email> */}
			{/* <Message> */}
			<textarea
				id="message"
				name="message"
				placeholder="Message"
				className="border p-2 font-inter text-[14px] rounded w-full"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			{/* </Message> */}
			<button
				type="submit"
				disabled={state.submitting}
				className="text-[14px] font-inter font-medium border p-2 w-full rounded bg-emerald-300 hover:opacity-80">
				Send Message
			</button>
		</form>
	);
}

export default Form;
