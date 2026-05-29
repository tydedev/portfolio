import { Html, Text, Link } from "@react-email/components";

interface EmailBodyProps {
  name: string;
  lastname: string;
  email: string;
  message: string;
}

export const EmailBody = (props: EmailBodyProps) => {
  return (
    <Html lang={"en"}>
      <Text>{props.message}</Text>
      <Text>
        Message sent by {props.name} {props.lastname}
      </Text>
      <Text>
        Email: <Link href={`mailto:${props.email}`}>{props.email}</Link>
      </Text>
    </Html>
  );
};
