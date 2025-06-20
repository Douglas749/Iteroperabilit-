
import React from 'react';
import { Book, Users, TrendingUp, Calendar, Plus, Search, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import QuickActions from '@/components/QuickActions';
import BooksGrid from '@/components/BooksGrid';
import RecentActivity from '@/components/RecentActivity';
import StatsCards from '@/components/StatsCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Book className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">BiblioTech</h1>
                <p className="text-sm text-gray-500">Gestion moderne de bibliothèque</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Rechercher un livre, un membre..." 
                  className="pl-10 w-80"
                />
              </div>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge variant="destructive" className="ml-2">3</Badge>
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Nouvel emprunt
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Tableau de bord
          </h2>
          <p className="text-gray-600">
            Gérez efficacement les emprunts, retours et membres de votre bibliothèque
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Quick Actions */}
        <QuickActions />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>

          {/* Books Overview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Livres populaires
                </CardTitle>
                <CardDescription>
                  Les plus empruntés cette semaine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "1984", author: "George Orwell", loans: 15 },
                    { title: "Le Petit Prince", author: "Saint-Exupéry", loans: 12 },
                    { title: "Harry Potter à l'école des sorciers", author: "J.K. Rowling", loans: 10 },
                    { title: "L'Étranger", author: "Albert Camus", loans: 8 }
                  ].map((book, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="font-medium text-sm">{book.title}</p>
                        <p className="text-xs text-gray-500">{book.author}</p>
                      </div>
                      <Badge variant="secondary">{book.loans} emprunts</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Books Grid */}
        <BooksGrid />
      </main>
    </div>
  );
};

export default Index;