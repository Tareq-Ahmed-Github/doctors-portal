import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const { register, handleSubmit } = useForm();

  if (user) {
    console.log(user);
  }
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center font-bold">Sign in</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="Email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },

                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide an Email",
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt">Alt label</span>
              </label>
            </div>

            <input
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
          </form>

          <div class="divider">OR</div>

          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
