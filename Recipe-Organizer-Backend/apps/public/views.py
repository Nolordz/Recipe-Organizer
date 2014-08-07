from django.shortcuts import render
from rest_framework import generics
from serializers import *
from models import *
# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

class RecipeList(generics.ListAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Recipe
    serializer_class = RecipeSerializer


class IngredientList(generics.ListAPIView):
    model = Ingredient
    serializer_class = IngredientSerializer
    queryset = Ingredient.objects.all()


class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    model = Ingredient
    serializer_class = IngredientSerializer


class AddRecipe(generics.CreateAPIView):
    model = Recipe
    serializer_class = RecipeSerializer
    queryset = Ingredient.objects.all()


@api_view(('PUT',))
def get_ingredient_by_name(request):

    try:
        ingredient = Ingredient.objects.get(name=request.DATA['name'])

    except:
        ingredient = Ingredient(name=request.DATA['name'])
        ingredient.save()

    serializer = IngredientSerializer(ingredient)
    return Response(serializer.data, status=status.HTTP_200_OK)