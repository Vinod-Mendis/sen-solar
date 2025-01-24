/** @format */

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";

export default function Calculator() {
  return (
    <div className="mx-auto px-4 py-8 max-w-5xl mt-6">
      <Card className="p-6 bg-white py-10 px-20">
        <h1 className="text-[#3E7E45] text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
          Lorem ipsum dolor sit amet consectetur. Est id mus sed in mauris
          pellentesque dolor.
        </h1>

        <CardContent className="p-0">
          <form>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-lg font-medium">
                  Monthly electricity bill
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full"
                />
                <span className="text-sm text-muted-foreground">(LKR)</span>
              </div>

              <div className="space-y-2">
                <label className="text-lg font-medium">Monthly units</label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full"
                />
                <span className="text-sm text-muted-foreground">Units</span>
              </div>
            </div>
            <div className="mt-14">
              <ButtonComponent variant={"green_primary"} icon={"arrow"}>
                Submit
              </ButtonComponent>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
