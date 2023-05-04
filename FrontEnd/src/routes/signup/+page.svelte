<script>
// @ts-nocheck
    import * as yup from 'yup';

    // simulate a network or database call
    const checkUsername = username =>
    new Promise(resolve => {
        const takenUsernames = ['jane', 'john', 'elon', 'foo'];
        const available = !takenUsernames.includes(username);
        // if we return `true` then validation has passed
        setTimeout(() => resolve(available), 500);
    });

    const regSchema = yup.object().shape({
    name: yup.string().required('manadatory field'),
    email: yup
        .string()
        .required('manadatory field')
        .email("Email doesn't look right"),
    username: yup
        .string()
        .required('manadatory field')
        .test('usernameTaken', 'Please choose another username', checkUsername),
    password: yup.string().required('manadatory field'),
    passwordConfirm: yup
        .string()
        .required('manadatory field')
        .oneOf([yup.ref('password'), null], 'Passwords do not match')
    });
  
    let values = {};
    let errors = {};
  
    const extractErrors = err => {
      return err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    };
  
    const submitHandler = () => {
      regSchema
        .validate(values, { abortEarly: false })
        .then(() => {
          // submit a form to the server here, etc
          console.log(JSON.stringify(values,null,2));
          alert(JSON.stringify(values,null,2));
          // clear the errors
          errors = {};
        })
        .catch(err => (errors = extractErrors(err)));
    };
  </script>

<div>
    <h1>Please Register</h1>
    <form class = "flex flex-col justify-center items-center" on:submit|preventDefault={submitHandler}>
      <div>
        <label for = "name">Name:</label>
        <br>
        <input
          type="text"
          name="name"
          bind:value={values.name}
          placeholder="Your name"
        />
        {#if errors.name}{errors.name}{/if}
      </div>
      <div>
        <label for = "email">Email:</label>
        <br>
        <input
          type="text"
          name="email"
          bind:value={values.email}
          placeholder="Your email"
        />
        {#if errors.email}{errors.email}{/if}
      </div>
      <div>
        <label for = "username">Username:</label>
        <br>
        <input
          type="text"
          name="username"
          bind:value={values.username}
          placeholder="Choose username"
        />
        {#if errors.username}{errors.username}{/if}
      </div>
      <div>
        <label for = "password">Password:</label>
        <br>
        <input
          type="password"
          name="password"
          bind:value={values.password}
          placeholder="Password"
        />
        {#if errors.password}{errors.password}{/if}
      </div>
      <div>
        <label for = "passwordConfirm">Confirm Password:</label>
        <br>
        <input
          type="password"
          name="passwordConfirm"
          bind:value={values.passwordConfirm}
          placeholder="Confirm password"
        />
        {#if errors.passwordConfirm}{
        errors.passwordConfirm
        }{/if}
      </div>
      <div class = "mt-3">
        <button class = "border border-black rounded-md bg-white p-1 hover:bg-amber-700  hover:text-white" type="submit">Register</button>
      </div>
    </form>
  </div>