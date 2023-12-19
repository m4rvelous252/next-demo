import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

interface LoginFormProps {
	onSubmit: (data: { username: string; password: string }) => void;
	error?: string;
}

const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
	const t = useTranslations("auth");
	const form = useForm<{ username: string; password: string }>();
	const { errors } = form.formState;
	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='p-6 border w-full max-w-3xl rounded-lg flex flex-col gap-4'>
			<h1 data-testid='form-title' className='text-lg font-semibold'>
				{t("title")}
			</h1>
			<div className='flex flex-col space-y-2'>
				<Label htmlFor='username'>{t("username")}</Label>
				<Input
					data-testid='username-input'
					id='username'
					type='text'
					{...form.register("username", {
						required: {
							value: true,
							message: "required",
						},
					})}
				/>
				{errors.username && (
					<p data-test-id='validation-error' className='text-red-500'>
						{t("required")}
					</p>
				)}
			</div>
			<div className='flex flex-col space-y-2'>
				<Label htmlFor='password'>{t("password")}</Label>
				<Input
					data-testid='password-input'
					id='password'
					type='password'
					{...form.register("password", { required: true })}
					className='text-black'
				/>
				{errors.username && (
					<p data-test-id='validation-error' className='text-red-500'>
						{t("required")}
					</p>
				)}
			</div>
			{error && (
				<p data-test-id='login-error' className='text-red-500'>
					{t("error")}
				</p>
			)}
			<Button
				type='submit'
				data-testid='submit-button'
				className='px-4 py-3 bg-slate-400 rounded mt-2'>
				{t("login")}
			</Button>
		</form>
	);
};
export default LoginForm;
