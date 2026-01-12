import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
 
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Sagar 👋</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Total Users</h2>
            <p className="text-2xl font-bold">1,250</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Orders</h2>
            <p className="text-2xl font-bold">320</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Revenue</h2>
            <p className="text-2xl font-bold">$5,430</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Pending</h2>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

  
      <div className="flex gap-4">
        <Button>Add User</Button>
        <Button variant="outline">View Reports</Button>
      </div>
    </div>
  );
};

export default Home;
