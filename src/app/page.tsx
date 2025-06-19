import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import FormPageBar from "@/components/form-page-bar";
import FormContextProvider from "@/components/providers/form-pages.provider";

export default function AttendanceFormPage() {
   return (
      <>
         <div className="w-full max-w-md space-y-6 my-auto">
            <h2 className="text-3xl font-semibold text-center text-slate-100">
               Anything else you&apos;d like to let us know?
            </h2>

            <RadioGroup defaultValue="no" className="space-y-3">
               <div className="flex items-center space-x-3 border border-slate-700 bg-slate-800 p-4 rounded-lg hover:border-slate-600 transition-colors">
                  <RadioGroupItem
                     value="yes"
                     id="yes-option"
                     className="border-slate-600 text-amber-500 focus:ring-amber-500"
                  />
                  <Label
                     htmlFor="yes-option"
                     className="text-base text-slate-200 cursor-pointer"
                  >
                     Yes
                  </Label>
               </div>
               <div className="flex items-center space-x-3 border border-slate-700 bg-slate-800 p-4 rounded-lg hover:border-slate-600 transition-colors">
                  <RadioGroupItem
                     value="no"
                     id="no-option"
                     className="border-slate-600 text-amber-500 focus:ring-amber-500"
                  />
                  <Label
                     htmlFor="no-option"
                     className="text-base text-slate-200 cursor-pointer"
                  >
                     No
                  </Label>
               </div>
            </RadioGroup>

            <Textarea
               placeholder="Provide any additional information about your attendance"
               className="bg-slate-800 border-slate-700 placeholder:text-slate-500 text-slate-100 min-h-[140px] text-base rounded-lg focus:border-amber-500 focus:ring-amber-500"
               rows={5}
            />

            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-base py-3 rounded-lg">
               Submit
            </Button>
         </div>
         <FormContextProvider>
            <FormPageBar />
         </FormContextProvider>
      </>
   );
}
