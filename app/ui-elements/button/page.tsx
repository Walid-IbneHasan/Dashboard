import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ButtonPage = () => {
  return (
    <main className="mt-5 container">
      <div className="flex justify-between mb-5">
        <div className="text-black font-semibold">Buttons</div>
        <div className="font-bold">
          Ui Elements <span className="ml-1"> &gt;</span> Buttons
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Basic Examples</CardTitle>
            <CardDescription>
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
              Primary
            </Button>
            <Button
              variant="secondary"
              className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white"
            >
              Secondary
            </Button>
            <Button
              variant="destructive"
              className="bg-red-400 text-white hover:bg-red-700 hover:text-white "
            >
              Destructive
            </Button>
            <Button
              variant="outline"
              className="bg-teal-700 text-white hover:bg-teal-900 hover:text-white"
            >
              Success
            </Button>
            <Button
              variant="ghost"
              className="bg-yellow-500 text-white hover:bg-yellow-700 hover:text-white"
            >
              Ghost
            </Button>
            <Button
              variant="link"
              className="text-blue-600 border-blue-600 hover:underline hover:text-blue-600 hover:border-blue-600"
            >
              Link
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Outline Buttons</CardTitle>
            <CardDescription>
              In need of a button, but not the hefty background colors they
              bring? Replace the default modifier classes with the{" "}
              <span className="text-purple-500">.btn-outline-*</span>
              ones to remove all background images and colors on any button.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Primary
            </Button>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Secondary
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Destructive
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              Success
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              Info
            </Button>
            <Button
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Link
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Button Tags</CardTitle>
            <CardDescription>
              The <span className="text-purple-500">.btn</span> classes are
              designed to be used with the{" "}
              <span className="text-purple-500">&lt;button&gt;</span> element.
              However, you can also use these classes on{" "}
              <span className="text-purple-500">&lt;a&gt;</span> or{" "}
              <span className="text-purple-500">input&gt;</span> &lt; elements
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
              Link
            </Button>
            <Button
              variant="secondary"
              className="bg-purple-600 text-white hover:bg-purple-700 hover:text-white"
            >
              Button
            </Button>
            <Button
              variant="destructive"
              className="bg-red-400 text-white hover:bg-red-700 hover:text-white "
            >
              Submit
            </Button>
            <Button
              variant="outline"
              className="bg-teal-700 text-white hover:bg-teal-900 hover:text-white"
            >
              Input
            </Button>
            <Button
              variant="ghost"
              className="bg-yellow-500 text-white hover:bg-yellow-700 hover:text-white"
            >
              Reset
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>
              Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for
              additional sizes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap ">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white px-8 py-6">
              Large Button
            </Button>
            <Button className="bg-teal-600 text-white hover:bg-teal-700 hover:text-white px-8 py-6">
              Large Button
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white px-2 py-1">
              Small Button
            </Button>
            <Button className="bg-red-400 text-white hover:bg-red-600 hover:text-white px-2 py-1">
              Small Button
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Checkbox and Radio Buttons</CardTitle>
            <CardDescription>
              <span className="text-purple-500">.button </span>styles can be
              applied to other elements, such as{" "}
              <span className="text-purple-500">&lt;label&gt;</span> s, to
              provide checkbox or radio style button toggling. Add{" "}
              <span className="text-purple-500">
                data-toggle=&quot;buttons&quot;
              </span>{" "}
              to a <span className="text-purple-500"> .btn-group </span>{" "}
              containing those modified buttons to enable their toggling
              behavior via JavaScript and add .btn-group-toggle to style the{" "}
              <span className="text-purple-500">&lt;input&gt;</span> s within
              your buttons.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 flex-wrap">
            <Button className="bg-purple-600 mr-4 text-white hover:bg-purple-700 hover:text-white">
              Checked
            </Button>
            <Button
              variant="secondary"
              className="bg-blue-900 text-white hover:bg-blue-700 hover:text-white"
            >
              Active
            </Button>
            <Button
              variant="destructive"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white "
            >
              Radio
            </Button>
            <Button
              variant="outline"
              className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
            >
              Radio
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle>Block Level Buttons</CardTitle>
            <CardDescription>
              Create block level buttons—those that span the full width of a
              parent—by adding{" "}
              <span className="text-purple-500">.btn-block</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 flex-wrap">
            <Button className="bg-teal-600 py-4 text-white hover:bg-teal-700 hover:text-white w-full">
              Block Level Button
            </Button>
            <Button className=" text-blue-500 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white w-full py-6 ">
              Secondary
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default ButtonPage;
