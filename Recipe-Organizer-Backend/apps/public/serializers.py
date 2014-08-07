from models import *
from rest_framework import serializers


class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient


class RecipeSerializer(serializers.ModelSerializer):
    ingredients_data = serializers.SerializerMethodField('get_ingredient_data')

    def get_ingredient_data(self, obj):
        return IngredientSerializer(obj.ingredients.all(), many=True).data

    class Meta:
        model = Recipe
        # fields = ('id','name','ingredients','description','photo')
        # depth = 1
