'use strict';

var Mt                = require("./mt");
var Block             = require("../../lib/js/block");
var Caml_obj          = require("../../lib/js/caml_obj");
var Js_primitive      = require("../../lib/js/js_primitive");
var Js_null_undefined = require("../../lib/js/js_null_undefined");

var suites_000 = /* tuple */[
  "to_opt - null",
  function () {
    return /* Eq */Block.__(0, [
              /* None */0,
              Js_primitive.js_from_nullable_def(null)
            ]);
  }
];

var suites_001 = /* :: */[
  /* tuple */[
    "to_opt - undefined",
    function () {
      return /* Eq */Block.__(0, [
                /* None */0,
                Js_primitive.js_from_nullable_def(undefined)
              ]);
    }
  ],
  /* :: */[
    /* tuple */[
      "to_opt - empty",
      function () {
        return /* Eq */Block.__(0, [
                  /* None */0,
                  Js_primitive.js_from_nullable_def(undefined)
                ]);
      }
    ],
    /* :: */[
      /* tuple */[
        "to_opt - 'a",
        function () {
          return /* Eq */Block.__(0, [
                    /* Some */[/* () */0],
                    Js_primitive.js_from_nullable_def(/* () */0)
                  ]);
        }
      ],
      /* :: */[
        /* tuple */[
          "return",
          function () {
            return /* Eq */Block.__(0, [
                      /* Some */["something"],
                      Js_primitive.js_from_nullable_def("something")
                    ]);
          }
        ],
        /* :: */[
          /* tuple */[
            "test - null",
            function () {
              return /* Eq */Block.__(0, [
                        /* true */1,
                        Js_primitive.js_is_nil_undef(null)
                      ]);
            }
          ],
          /* :: */[
            /* tuple */[
              "test - undefined",
              function () {
                return /* Eq */Block.__(0, [
                          /* true */1,
                          Js_primitive.js_is_nil_undef(undefined)
                        ]);
              }
            ],
            /* :: */[
              /* tuple */[
                "test - empty",
                function () {
                  return /* Eq */Block.__(0, [
                            /* true */1,
                            Js_primitive.js_is_nil_undef(undefined)
                          ]);
                }
              ],
              /* :: */[
                /* tuple */[
                  "test - 'a",
                  function () {
                    return /* Eq */Block.__(0, [
                              /* false */0,
                              Js_primitive.js_is_nil_undef(/* () */0)
                            ]);
                  }
                ],
                /* :: */[
                  /* tuple */[
                    "bind - null",
                    function () {
                      return /* Eq */Block.__(0, [
                                /* true */1,
                                Js_primitive.js_is_nil_undef(Js_null_undefined.bind(null, function (v) {
                                          return v;
                                        }))
                              ]);
                    }
                  ],
                  /* :: */[
                    /* tuple */[
                      "bind - undefined",
                      function () {
                        return /* Eq */Block.__(0, [
                                  /* true */1,
                                  Js_primitive.js_is_nil_undef(Js_null_undefined.bind(undefined, function (v) {
                                            return v;
                                          }))
                                ]);
                      }
                    ],
                    /* :: */[
                      /* tuple */[
                        "bind - empty",
                        function () {
                          return /* Eq */Block.__(0, [
                                    /* true */1,
                                    Js_primitive.js_is_nil_undef(Js_null_undefined.bind(undefined, function (v) {
                                              return v;
                                            }))
                                  ]);
                        }
                      ],
                      /* :: */[
                        /* tuple */[
                          "bind - 'a",
                          function () {
                            return /* Eq */Block.__(0, [
                                      /* Some */[4],
                                      Js_primitive.js_from_nullable_def(Js_null_undefined.bind(2, function (n) {
                                                return (n << 1);
                                              }))
                                    ]);
                          }
                        ],
                        /* :: */[
                          /* tuple */[
                            "iter - null",
                            function () {
                              var hit = [/* false */0];
                              Js_null_undefined.iter(null, function () {
                                    hit[0] = /* true */1;
                                    return /* () */0;
                                  });
                              return /* Eq */Block.__(0, [
                                        /* false */0,
                                        hit[0]
                                      ]);
                            }
                          ],
                          /* :: */[
                            /* tuple */[
                              "iter - undefined",
                              function () {
                                var hit = [/* false */0];
                                Js_null_undefined.iter(undefined, function () {
                                      hit[0] = /* true */1;
                                      return /* () */0;
                                    });
                                return /* Eq */Block.__(0, [
                                          /* false */0,
                                          hit[0]
                                        ]);
                              }
                            ],
                            /* :: */[
                              /* tuple */[
                                "iter - empty",
                                function () {
                                  var hit = [/* false */0];
                                  Js_null_undefined.iter(undefined, function () {
                                        hit[0] = /* true */1;
                                        return /* () */0;
                                      });
                                  return /* Eq */Block.__(0, [
                                            /* false */0,
                                            hit[0]
                                          ]);
                                }
                              ],
                              /* :: */[
                                /* tuple */[
                                  "iter - 'a",
                                  function () {
                                    var hit = [0];
                                    Js_null_undefined.iter(2, function (v) {
                                          hit[0] = v;
                                          return /* () */0;
                                        });
                                    return /* Eq */Block.__(0, [
                                              2,
                                              hit[0]
                                            ]);
                                  }
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "from_opt - None",
                                    function () {
                                      return /* Eq */Block.__(0, [
                                                undefined,
                                                Js_null_undefined.from_opt(/* None */0)
                                              ]);
                                    }
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "from_opt - Some",
                                      function () {
                                        return /* Eq */Block.__(0, [
                                                  2,
                                                  Js_null_undefined.from_opt(/* Some */[2])
                                                ]);
                                      }
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "null <> undefined",
                                        function () {
                                          return /* Ok */Block.__(2, [Caml_obj.caml_notequal(null, undefined)]);
                                        }
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "null <> empty",
                                          function () {
                                            return /* Ok */Block.__(2, [Caml_obj.caml_notequal(null, undefined)]);
                                          }
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "undefined = empty",
                                            function () {
                                              return /* Ok */Block.__(2, [Caml_obj.caml_equal(undefined, undefined)]);
                                            }
                                          ],
                                          /* [] */0
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];

var suites = /* :: */[
  suites_000,
  suites_001
];

Mt.from_pair_suites("js_null_undefined_test.ml", suites);

exports.suites = suites;
/*  Not a pure module */
