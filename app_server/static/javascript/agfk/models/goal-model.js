
/*global define*/
define(["backbone"], function(Backbone){
  return Backbone.Model.extend({
    defaults: function () {
      return {
        text: "",
        id: "",
        concept: null
      };
    },

    toJSON: function () {
      var thisModel = this;
        return {
          id: thisModel.id,
          text: thisModel.get("text")
        };
    }
  });
});