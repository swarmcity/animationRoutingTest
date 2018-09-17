import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="css-shared">
  <template>
    <style>
    *:focus {
      outline: none !important;
  }

  :host {
      /* users can not select unless we explicity allow */
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: default;

      /*----------COLORS----------*/
      /* Primary tone */
      --sc-yellow: #EFD96F;
      --sc-blue: #24B1FF;
      /* Secondary tone */
      --sc-green: #7AD69C;
      --sc-red: #F55858;
      --sc-grey4: #333333;
      /* Additional colors */
      --sc-white: #FAFAFA;
      --sc-bg: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAIAAAAA4vtyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQ5OTg0REFDRDA2MTFFNkJEQzNGOEQ3OTg3MTIyMUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ5OTg0REJDRDA2MTFFNkJEQzNGOEQ3OTg3MTIyMUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDk5ODREOENEMDYxMUU2QkRDM0Y4RDc5ODcxMjIxRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDk5ODREOUNEMDYxMUU2QkRDM0Y4RDc5ODcxMjIxRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po1+pzgAACC2SURBVHjafJ3JkhtHDAWlMaX//1BHWF4ulhe5KVDJnETRc1CMOCS7uwqF5eEB+Pjrr79++/bt48eP8++///779v3nn3/+uf57u92uX64X56/Xf69fPnz4cP17ved6/fr9ev16z3zqen2+YT7y008/XW/gbfP6vGFe+fb95+P3nw/ff+b7rzfMzczH56/z5vngfJZ7mO+cN8wv84b51PX7dSdzn/NV1y/c2zzjhx8/853Xi3Orvjdub17kuXyt62vn2f3X+WVemdu78bG54+t6czfz3+uG5hvnS//+++/52Nzc/HXWiPewRvN4c715cb6Wm/CCzitz39e/f/31F+s4Szbf7yWYd3pp2FpugA247nzeP+/knregeE1HPlgNPyMfZDvnTq47nzfP5RAXf/y+r/M3Nod1mQ0YQfbrc9XrMea+vSjs0HwK0RvJimj41r0lsx+IJ2s9L7LobNv14jw2V+f9CC8CxN1yLd8/m4HM+vxZ0jnxCIfPGdtvObCs3OUbBcLtsrhzvblprh3h4hVOBurI65tzyimZT/EMPB6CzK4gUD5/PIwP9bwHcZsLffr0aZZyfvjyuYefvv/MCba23CLFvSEZqEpv0l70eQ+SdEP+/ZzcGZI4ssY15r8oKB6bz37Qz3wkOz93bE1t7e8bsPLNE0bd881sAFqID6LiuWHL+xgzC7X1DKdzdpGn9sZnPbfwPV657GoeyT9zl2zG1qQ8pLdhvnruxjbHX+K1sFix/b7j2fhRbuwTF+Ki8z1jEjlV++ly2rgf7DNbzgpyJyPmc5+cCZ4C8b/edv0Jc8itcqZvWOHtMCB6WRquYWniYSy8tiroqzynNRWSHv+Ev2Lx7LGwIvMnrJz9NCynLepRa7HoqLj5Zh6KG54N9o2x6DzatfRjKeP23GzifPBtTOxgWcpyrDADdld8qOfN87XXDfG1MYOYJh/zLJn9jW17MDNzSzyaTQgC58fxixxl1D0az+6vj5SNDSrIa/j0lGa7MN/+ar/1WiYfSQ7EvG7lMHfMVXl9HKz5K7fIovuI+GHs4yOMYwY5XjYGXmVUuf/luMxNImFYLDu+qIiRWVaGVeJWkTkbUvvNyMfjh1BonoTL8wAoQe8hC21/IycA843s2+Re10U5zvfgO89FWZcETfzC0zpOQTiwew6j4l3MRe3IWtjjwxBkjKRydXTO1py+dCPB33//fW8v6h4rFG3IGbeLHTVlXWlfM060bRdi5VuyJrHjFMu8vVUH0o6T8w0YQEur9RgCZCHzblkB2JXcXtP1+nXu72/95ZdfYvR5Bq+aHyZxo7XK9ctEhrxn9LhXn+e0P+sDZHGOz2BTnwDHxtPSzRp5n6yIHAdtt4ovJOphcRBha0ursviBtvO3ifcclCZ4s32bG7UtmnNqRRSvw9eeD379+jWCY93FcY7N8Mm178Q7jR0FG/Eh4CrcW/ATLxButPV+4BNuw/4V3sGO+B7ObmJC39n17Rx8Lxz2ncCd5ThKHyd03JjrT58/fx4NboEa2UfFGfna0ZwP0yguB2VIrtfRkr69ftTLfNa+4DGoBB06QmZ+dn/zMxi2S++YIkbZ4VmE2lrYgmmh4P1jTkeBGG/B98jDzNvsLyagC3y0wUvDPlbi80GLPIbNZpnf5ycgl8M3a6HtONqDuJ9OTIo1V8xdVLlVMzfBts2KBNLyvfrcxfjMrSNKmO45GeMz2LUw5GAkLuY90XxMi13vWHvHovMgEwd9+vQJxxqjHUndt8oVHzhwvBefsoBEPhO8B7/KDkOWwGvkEAzDaD/VR4pni6uOQYt0O3mQWzIAiXOM9Ix5CPSWIM4wraHDgL2B9uwUjOp+2NUN+NmT9Y91rhfF+Yft7bAHHEySKlZE3PHYAGuAeScnCSNsC5ZzveNY8AOf42MGBhH2kgVmCECCmFtEYtjtCr/LcqBwSXpshD2+2oSOEeQEWT50UUoYKMcNfk7L2iz3qPt4eAjpqE0uatjES8BxwRcak3M8rL46+4RusbdKzH994dj8uZlRSpaDW0IMPwliZQVniQacC7qQczofuXSijYyhV8tOICT81DkE2D0LL3dCUineRVwO20P8Im+MNZjRPR8Un3tSPeOU89/5q9U6n31ApoZvxuvgRBjaR0J38ojfZ6vnS2zE42l4d+0vsxOAB86oWJPY3eYjtmDGII/egfWyvVVLIc6C/7u9OPQnsh9Jsgdx//n555/BRgJSJ8wF/rZp3s6MNbWhzWSBA6BvHZXFynUdstqOWSy2P+fksAXWIhUxTyCJ7gVg4IoOFY3IZ9EGPb6NgXYIu9ElxMEojW8RNW1H2MFnjgU75KtsQ2S81+GiIxonQ7DV28yiT17FOwEsk6k3GmwYzgbJmQY7gbzTebQb+2PtZpN9TCt7yeYVMt3WGJyShGOJqtgk1LQvZG+BXUweI7FioNqkQXwztqjGv46pSmOf+yiz6I5FrBXsFr5ZaeKkG4k1UmhmQDKCGwq3McinLKE87THCMlnD7pbT8cFso818A9vXNEaPMHm9/FxHGAqn63Ic5gv//vGDkiEp9MSNydhZvVpUra853aOkrMSdSwq2t1OvDsFR5RYQm/ednrXLYRgLjTc/SA9pBs6B057kZ5JJhyQSQ0UU7bwmAVGypK/oCDcgxuAhJvHg1VhekrbH4Iy1sSkPcu1MEO4wWp4UlXOKuMCGSL0WBGJ2SxyHDxHK5iEpaT8dUpUEMisT1T//HWDdMR04lVP5j+f98uULz2kfw9Q7J2jsAtp5d4jLgoKz7+T4fuZQtMK2COKxM0H5tuSRnZ2IXrLj5Mzqhnlt220n4tdeTz06J6aVYPu+tY6+jEnN3gJEWM9gAx1HhKXla9gns8D6dQ6cwyhbLcsEYrH1GJbZTLlsG4fJJEg4kRF/P9ExqrLnOntmK8hK2gu4KyXHDl4s0CJuy9w2k/HmCGPKEVUeg8MUDGuTdgwtcbZ85gjBwmgkg2i1O89iBMJeXeyTPW4bcCTy6DiGGuXzES8Au/jwCKw65sGudWSLAm4Yq2FLrzMVauBe1thG22EcxxBdDNJZY8Qx2DmWRPDQu8w7c3BvM7Oj4rB3fKxnUxHNnDyO1LgnnK13OIF1KH5kMAqkaXu15vRGHFAd9giJG71AyCD6IVyUnUMI0zoRP982Npkb2CwrTFpco9BRg02iQxKgONEIIhb19eatDvtnS1a0BGtq7flh/YSE5G23xYPVBtiSrDfMmc33g0EOXjYR/HjTsxDzit0BP1d8lQSSyT5e/yXOt0lwXjOJvLn6M/LwKXOaNATX8ZNQpqACxuKNS7zDgMQhmNW0aDyp+LfbjtHDGCWyzYM5Dz4fHI8CFCHct2TTXjE1wpw1IoKy9rFIxnTzYZ8RmX0mU6iwIRN6IIymB9nOOBS2r20Z8fZYQHzMfc54QucX40GaQ2gHyYQZO4JJqMJeIlAyVdSMq6P/yqXRpYhIqOpzPp751eSCx/nfTN3NP8kehBnhIhjiAMeBsSsp7TDIE68mq8ZC23AdKc0Jjmzkkx0ldnGAZtUfQBvo2JGmr7iphm/hmRIuBlkO3uu7dw4vxpn3zAkwlsASW8vtXXRcbgE0yTIOnxWLlY9zT4F5/SdT4XYxTNw5YuDR+MaXwgBL0chtHmzE/NKJposEcfRRDS8+kVvKyUzOSsRhLzCMqo3QWvPg/ADeOTXqDXZuIDS/V8h7YuadabIX79PjDN1gzs48O19286qB5dqLcFIxNiepmThwGwyxPYxZtjbjwOJ1OOD23nink6g7mtNLsGzfwmcKd8GwqF/BOwzrIld0EGsr+GAVhIdEsY99YcdWoD9Go3yoHTikoiy2dP4aKB/4ibOJhvH2h89l9kNYefv7Q7q3hZhveFBH33NDnSTAGybJbvffYdSIsqkuc0u3lBg4PGP/zaDj5jCPRqvtF7u8yrEy+Gr8/WT+Eo5G8wQ4Mzxnrbo1nmsnw9TN+WatURThzCTNFC00am3AYfOKH9ovlC52zyFvXOkkbb2gNuJWppa78eVD6fJaECId/TaXpFpjpgIk9SopOzG5LCT6CcFcMbEB0ZQPJh9rSm/MyZMK55S/KXbIo0ky1wembCO6GxM3GFmc+tl5Dg1P6N2K10U2JpW+CDXKMLi0nQ3nbYJK5pRAwTQxxjbDfpFFeyNRKac2/o5hv1/OPKHNkgWPRppclWHlY/qR1Q5XAgyAS8xys8TzTgNteUiOo+vBXdPjlNmoxAHdwmZwIasRgiTiN682DMhd9seT7mv55L07lWSqEgo6XZuL7RTo2KVZ36183vQTohKXJjlnR9ul+8gU8Zfj5GjbnImgBUCVvhmgnlQJb5HKZrD6BNgU/I+uR6Hd2GF7RVwDQ2wsIfAZ3ifPvFPJiRqyoMmZ+PDauKW0M6rDVAA4deFGgFDiJmXvXYZq8x7oAlwXtbOLUhBEW+/np1IjuXNyLlkz+phNxokcneMky2YoGudyAZid3/BhfIcJp8PvjEsaMrRLZH0KN1hmhWamhXdiJ+N2oj8U3YfsW6m5EJJFDCZlNzxk1/D9dpE1lzCf0o6pWW1+Z4qdHark3nz8d+hr7q6j2ZQkxLE2nyXuuXHZ4Mz2Wa2mHuWM1NM4V2tQNCznBIToqM3gjULA50vnA9MoTYV03sdoanAehN2Caco4/IZkEZxJxjykmnuX2IWEbJaHM7rA3VCPwoW/eTdSHj+eACz1tIvZVULktHxm7R0CWeys2D7yCVLMFDvufSgFoQO5JgttiQ1MvYBjQCcGXEMcTM01GgQBm83wLN81Cmg9O646hH/bDUP2cwE3PTJdYsOhs/THAlSzaww0btpMemcYa0vrI+/fdgSx2BGCDSAH8gseGVjQN+Oz+w4o/OOPPwxA2x30WdsynlYSFsmUte3mM5xKc4x3IwQnOsx2sjlNZm7unKLZuAnREqmnTjnrLtxNG6tUDeb7A0HbIXz4ka5GMK3y+v3r168GETcu6vujYji1JinKMWswZbsu0kxXjhCpHf2GrBo+yG5RFFFIUjSZ5BEO9yOzittwd+p1rIW8BzcUvw00PTzs3TuWC9Bq1RyC1Za4Xfj8Ch3bhctJvseSB5lygZnxcd9nTrbpNwZ+KVZxbGUPOEhnAho3xHjIym+//Za9SmMSc6xeHcNsKSmh7R5sGQwvN63UUjaWKp+Qy8LQc04jaeWwR2EzbF6NQ9M0OYrTucEAp7PjL9yCCEIsTaTq0qGjGE7+Ph3OgiWE9JwqhtQjEBCk89UWrvDLokOOpMxobXOP0xrC9tbwBlRAoqGhRaacOvxh3KSbLb5DmPmK3ZIj5jE23SKQohbX6caDSvWadcjusbQhkXl+mztDAnSLDJXzSN4PxZxS/BQO8CzmQNi0Jo51U4eHl4n0QdZwf5U0DrEGcGKMB46etSFK2YZzqibsAbA4cHUct+UgAeROP6Wsy9ogTrdR2GhOqxr87J0LzGGyDvBn35HFdtOfXQrkHjcOf3d5MtmJAfyObZawUUZi3WwoSnmXVG8kJG4GKtt4oT2N9OzaGfDUbXE5M4IcBu2bgUJBiceNEN9pIOMMyVkHfIhmMM+AmB5X/VXZbqCo/frmtu8ybTtzqSp2V7lQo141ZqCXjs34dr0AP2LhHX7Gm3io9KTZXPq+azx2gW9IP+wi3mdg67ANnMxM4WQY5fYa0zkpZOONbVnpuTQXHUVXT285KO6Io7HVWQeI0wMesFwBYjdr9b5J05c5UcNuMxAqx5E5foSzDXlzhO0YGG8xrrRBoXTqCTgag2Ey6THjGpcmAeeuYdtRdxis9kTTuiBNHR642OYs7ILKKKKdVwT2c9yR4k/gAe+cPfegmG4Anf5ERmnCiw/3KK6I87d8v1khNqoxKi52cHVRANfdEG7DNW9pqBFe0aY7R07D0gozNqlLpzQJKfllF4QEpDRzxl1MQhFMF4udLESDu9vB5r3u0rL0gohFQYMZzf62fh4fvOLVVCkELw6Xylm9VxTR3RzF+bltnzesf0wDJVPoRprb9m4ZolNGIs/d03k3tIvrnKzAxjZ2IZxhiYcfGVkgJb35mynqiPMUzYsDc13s8+fPZmPvGvhjs0I3G08myycMTN+OhKn+6TJxbIztW4IuZwk9po0SRsWRPR7Qh36P9UOBUFxgSpOpQsf+GqDVX79+DZnfzSWcC44T5iyHa2Vd8hA3cdOkjgmvpIu3Xc1ZsSZxM890sYh/7L4krsmKAmzZ9e4bw8NQerujmzg5pob5y8fZCpc4D7mbGGG0uW/c6hgh89mtRlidTJvYCFoIIP7avVCp+ggnEGTwXZhKP2xQLXvHhkMdSdkfSFkMamEW18WMVvTpTRaoJF1ZUx7GaXBNNMG6tXNaC+1uga/y6cfChHQ+Mq8ET8+rEW+NNbS3c7er1rOxKj5WG2tM/mjX9YRwG2MVx2N3JUnn9CiK9PbcRbAJo5wUTIEr3ipL44Y52QaMhxNzced3fzEv5mO+hy2YcxEE94OfbFzUboAhSZfw2p971Uhze7t2GCK5piiFDrdr4x1UE6wa3joC984DmwAaCnQS7hlJY7mc7ofv/O/py5yenihQY5h8+97J1AeFCur0xZ6DEfb9bqiWYML/MpQjlToJtpNRsvKBE7jnlgSA22Wumauyq3mT/XjXhIl80+6172dLtbxxWmdvKYRIb+nE4hvn2tHyK8Qi/rKLkpPCTWf2JK8dsvhcOlCIZ7FPbUqQLSKZYBHtd3OKy0u8kxIu3A8pwyIw/7X/cNRLCUA2PLAbSnAUPE+C84vt5XHM1vOqZU0nkgICyTgf85CMwMSK7m7ku4zCJuTN5D9DFukR5tSX+SemSJqVGREImdvcVTefmTs7zvtyxV4Kjsm/u0doltV14lZWHh+0MS+7xe5b6Ts3lJ9C5PBHTSG4OWXlkqU00vS3Hxs4BCMMI3fPNDt24jAbPU6Y6V0pjLqC4UQeKbk7Vu971FiQhu1l2IlyNbMxstCSM1iK9XzU3xhv26UqqYFPxbhxwV3PFx8jGn93ejt2vt/l+g5fQ6c1DGI9kJR32mewFkaW4t44g5qxIaZNhHuTPhW0bHtLaxenjWIV7TbEYux+OnvWQMz9ziwn15FD5qBj1+Xs8JJMOkE8pSZOfJtTnwQyyKJhOBRyxjfEArt9ieUY0uM7fqQbEdoie1ReiLKuyph1cc+EBD6bw52v3aG/Zyfa485xcf+OsOCT+00nrj3KK5Cf6yx89G2xQ42yEj/WtDxIwuHZbm4XUw/in6UIMVkVu+ThTKf5aQiXwVishTdoFVOWWNpRQgyMC3TctmNDBZlc4JyzJ2Yeu/HkrOPyPuu1X3Ez56sHXIwKdoy+y4t300ejRTt5tEuHncYMZzgtMa3ZokMS5rjSYReQpJrOfhqxZPqakD4LWSpdmlKyc8dzNoOQM85wD1Q/6A9KKYT3gBsbYTcPMKkcD28w8LuVaXg4mSjiEq0jGXhjfCEEWkGxzS59cfuP3f8q1nhXJN9hg6Ri2SLc3g1Ypww1zZFdzBhOfiJei+2e/rIzQU7Vp3F1Gl3v5ge76WPIPMERMxHoSCFhEVJkkuDZ1RZPd2NrwwDZUygMyR8Mdoh8KbKaL/GfdkFwAKk416/6tpvs5xxWhkkEiN++x3FkV8CPffMs6LFrnXOZ1pauDzGl8IbeSHLLdBHU+u6Cscc7hrG0/fdjTzW/x72CHXocsxC7o29qyQLnHuNtvsQuU2qjvLUej2GfJzVWgS3DAbl5NRP1sOERz5AjdxI88U58Bjdb2ClynLBNdA2JyhF5RltZ9afWKUNoHH8l32Q0Jujp7igJrunyIw8bw6Q/8PdYPLhR26Oa+zDVFHuQ+utQDY6pEhPhPKArzOmNZadjqWtz9/xYM5PDBZpZQD5MYDUb0tjjnOwNo38sncEQ00bsliGgJsm4F4hrjnYrhrSVDd6bpiZ0hA8ofxwKeeRn7al2x5x1tJB1Y9buWMOV/gThAxuA83APtBOd8HYj4vtnk+reHQkxqpN12nUXxEdh52SyOHDjbPC18ynLN/KXniUMDbVumeKIY610uOqm3rnXy3zPnoIcPohtLI5gnAJ3Xna7kE3hIjt9M2cxQUfQdmAHRxZHGdnAkAnpSOI0ntqTltM5KinGxJ/R/sf+OZl2mBYxyfpuqndA7zxLCmVdsOj1NMx+zzelu3Ec8MiRnZYkm7LWu/P7/8xvOA7E2IPSj/YjOFoixhSdBsdOgLLHf4ZbujsSRuBsflMBYU/kZvuwG6lvPDYNpvaAumBvdjb2JGtrTzeaZWu3eQ/gvGe1uLNhkFQ/iAfsbX88lTq7g00Q2T3O0OK4W5ve++6HfPqqAXpacSUofVU3tOXI6C69DSzyvOJ5p0fyV0bxkXO377wL7OP4uiYkvYrcz/2ITu/KiPST3Tj+w64aKd2OYCDTOJ3p+ke8lz+lzCyBsYMpuzEmPmaUh73mPX8riKlRwDSKc5i9KVMOre1obPZHHIptHZ2nfMgxrZ13czK33TElYVwRNw7zKLfwYTwq99hcN0GvwZZkbt3wIkDm7jjrTMAGaUOND5XKnLLA9JurS1BtNlz6mgWNuPszc9JNWtstjH3TRFxOrrpWM/Pnaby5W/Ad+3NtvGX7JGHcxb2B/JMeDnGo8U+mS+x2n4CgN6i36WkUsgJAbgLzu4yFM/32yf758RPv0PkQq920KZzvpPNBes1lTFnojLO1bRzyw1Cnc92u8c14ns3e2YT3fW4CfrEU7p/tbpwmraS4e0+WftjVIPSZ6wogDC83JjRjK49FgVnEXdGQ8R2dImgEVXD2HiIZFpFxGNdWJ1mReVVBSWMz0z0ls2r3tLeA8g8/MtMjXN+WpibWv1aIBjTcMCrtsRMS+3ls+hxbHmcHucaKutAg8i7EZSnJcTORw1S965EztR3Gy+4PGzcm2ddAofaknyMkRt6zCsl4xewYNjG7Pv0NN+luzwyJBTZukyBrl4c5BHXcuLs/p0zn1bxLhw570mcI9enWFuA+HHnPFHr2F4t7bpcTbGDPPzIKGE9/lykFyvDA4AxE3w7Abt15bHWQ3k7pZ+Du1MkSc2J2A/f0DByRd/WEWVZu/phuhEC5BARvYTNHoafwxc37El6F2byzlBaijLJ130Oj1e7JjpbAVu92irwzyjfJ1dQOmg7FPo1rkJnzBoSPdP5ALH4Q06Se/SNxaTKdYw84SOKNw07/DldlvDKnyb5Of1V/JL06U761R6XtcWepwyJw40XU99FEZ06IM7FOCnpvHO7tKZye73C/ucHFNtc33UWPkmu6wCz6lI6npi2DWo5J/bhoaSGwW5iEfpJXomc2NXcny5LH8BbixaVoJN8Z8p2br9CQ/FmsmuRhlinFXa/gl5BJwj9I0b8XfTfydTPT+aArZjOKLqWdx9KGWA6ncLHz6ciSxgG2ycT2qV0JLDOXmIaEO/K6P4jBjU2rQ+vFMLrAI+y7ia0tpMmxeWx5ekrs6NRIjhk1brwAbsGeJdzbRSOhysSLTXlmOuyG6eajnAySw7fRSLNEnz9/vu1Z88RBxhMSAW8+yWbcOYqJR8gBxGgT1Lwa75cT7dA/zbLcsmUn0BOm7Y4QaVGU8RWmW+3t/LDGSrtVGc1hn333cYnsBsXlOHpX3mQcEuuKMK0NI/OLE14BljOTLu0B3Dvd3Hx7Wbursgmt6Z7CRDlydbS2T3CbHqmJVEFSjay9467GiO8mM557jJNLqs8RRxC7kA/Sd8KKe9cKOf+5pztlAupxIlDG+LoAA8VCstfFcuzuPONmZyYb5dPjSQdp6ehOTg++WKJEH/nr3dO6M/U+7rWf8jtz0pIOBgbZXXaPbfI3n8Bg4Q4UQh4yaf1oVF6llPEOdrrfysoBTbi3nPsMY376L9OP4zghZZct78HDtnWuJjH5OHaJrh8mGiIIoc1kMovJnhvwaU7n/dysXR+y1zR9fBL1HNuqpif+ZtanTPAhDQg/Y9jdz8LxlNugQ6/IBDeKbsMHnn+nx+RmjI5DkkK6XZKaoQOWgO2HELtl6InVYGrAfYDsvO/JKSEKmsNiJz0YFAHp3b/cKUd7hAYGMmnRnMJkRNNfJPXXO8BJDXlwpd3a7hiIW1ekO2GEnaQE+QM7YOHgh/ELpS5NgF19sJUPIf0T5HEIG/wo9cHz4cv3ZBtHTo9E8t1sIMVwj/HeP6Co3bo99BVGvBljcQOKrZddQOKwy81bTfva+dvM2XJTrAwVO3ZTSELJD/XmxI2t1nHGMCeAoUBWuB406SIgP4wJpHuEyu6xPZ8iAxX8K+7TBvo3oOSmlZ62mql+x46YRtws2mlR9GGNjI6muq9DmnwEbzHWc/31zz//9AZmrle0MCz4VDWmeCOwtd1WVxh7oL1L+l5Nwti1WtF7zhkdm5E5kHTdVkj0e9KaZ90GkQfFevYxdHQbZHxr3iRt02N83F6+7RKT6780braXGeLcsdwyyIG9gt2CMLiKh82F3r5TMW6vFjjFe39s9xJHNtOEQ0x6zF/N+EiWLGRz1ittppxbyMB2vLHLKoRKFwcx+bBj45rAR2lffJwTkqFZexw9+bI9VtCNWI4jSNOVPtCFOy1nwOp93UEFYH+PjBCqGQZIRcDu1RmCysa2ItTphbEnGYb8lDLwPctg9zf2FRP0pvmuz5xZbKbixA3f1d+2DUEm7FbdrNA9+mbn4dJ6LjW+u+e7QS4jwLs4hJA9RRfRFZtPeBxfm2yi9WS4rpvwtUf0umdkuoCmiMetHbZTl0d40gdD3M7+O89C45Bdpu6Gjmn3E+NuC+wXj2foyPkORuix7ceWQJsiaGr1rkPb3cdCjd9Duo/zf9NS7+G/eyYE9ndXpW4la/vD8K1gs4aK5l/HYqEd7DkhAew2py4xvU0cGwArJkUmOSjJ2EzKYmejkv/bjWl33RYQwDt4MRVls2ruhgeBJCU/6Z1BoSZRiVvM7emx2yDb8UjX/D3BI1gj1VL8afrsWTNsQD/ciBTzu+7UiKbH426KcqxaiNNPL/nLly8ZZUJuMOhg5q085nPfbpmTbO1m2n8s6pEFbw50OrYHdNsUnWNTvqy4P7uruTdTDPjBPdv+p7kdh2k3PEiLu5uPhguL9lRKV2qZyZ5phKHn/Y+fZ2J7gsNk15IW98oaCjU0GNpM0JsdLacyL2mTo/nZjQ3StiGVp965/wQYAOq5nH5YPo5JAAAAAElFTkSuQmCC');
      --sc-grey1: #F2F2F2;
      --sc-grey2: #BFBFBF;
      --sc-grey3: #666666;
      --sc-grey3b: #ACACAC;
      --sc-green2: #23B460;
      --sc-red2: #D0021B;

      /*----------TYPOGRAPHY----------*/
      --main-title1: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 35px;
          letter-spacing: 0;
          line-height: 36px;
      }
      --main-title1-wide: {
          @apply --main-title1;
          font-size: 55px;
          line-height: 55px;
      }
      --main-title2: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 28px;
          letter-spacing: 0;
          line-height: 36px;
      }
      --main-title3: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 26px;
          letter-spacing: 0px;
          line-height: 32px;
      }
      --main-title4: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 0;
          line-height: 27px;
      }
      --body-default: {
          font-family: Montserrat, sans-serif;
          font-weight: 200;
          font-size: 16px;
          letter-spacing: 0;
          line-height: 19px;
      }
      --body-default-wide: {
          @apply --body-default;
          font-size: 25px;
          line-height: 25px;
      }
      --body-bold: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0;
          line-height: 19px;
      }
      --body-detail: {
          font-family: Montserrat, sans-serif;
          font-weight: 200;
          font-size: 20px;
          letter-spacing: 0;
          line-height: 24px;
      }
      --body-button: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0;
          line-height: 22px;
      }
      --small-light: {
          font-family: Montserrat, sans-serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 0;
          line-height: 15px;
      }
      --small-light-wide: {
          @apply --small-light;
          font-size: 16px;
          line-height: 19px;
      }
      --small-bold: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0;
          line-height: 15px;
      }
      --smallest-light: {
          font-family: Montserrat, sans-serif;
          font-weight: 300;
          font-size: 10px;
          letter-spacing: 0;
          line-height: 13px;
      }
      --smallest-bold: {
          font-family: Montserrat, sans-serif;
          font-weight: 800;
          font-size: 10px;
          letter-spacing: 0;
          line-height: 13px;
      }

      --blue-link: {
          @apply --small-bold;
          cursor: pointer;
          color: var(--sc-blue);
          border-bottom: 2px dotted var(--sc-blue);
      }

      --grey-link: {
          @apply --small-light;
          cursor: pointer;
          color: var(--sc-grey4);
          text-decoration: none;
          border-bottom: 1px dotted var(--sc-grey3b);
      }


      /*----------ICONS----------*/
      --retina: {
          background-image: url('../images/SwarmCity-Sprite-doublesize.png');
      }
      --sprite: {
          background-image: url('../images/SwarmCity-Sprite-normal.png');
          background-repeat: no-repeat;
          background-size: 324px 324px;
      }
      --icon-normal: {
          @apply --sprite;
          width: 54px;
          height: 54px;
      }
      --icon-small: {
          @apply --sprite;
          width: 36px;
          height: 36px;
      }
      --icon-mini: {
          @apply --sprite;
          width: 18px;
          height: 18px;
      }
      --vmark-grey4-normal: {
          @apply --icon-normal;
          background-position: -0px -0px;
      }
      --vmark-blue-normal: {
          @apply --icon-normal;
          background-position: -0px -54px;
      }
      --vmark-green-normal: {
          @apply --icon-normal;
          background-position: -0px -108px;
      }
      --vmark-red-normal: {
          @apply --icon-normal;
          background-position: -0px -162px;
      }
      --vmark-white-normal: {
          @apply --icon-normal;
          background-position: -0px -216px;
      }
      --vmark-white-small: {
          @apply --icon-small;
          background-position: -270px -36px;
      }
      --vmark-blue-small: {
          @apply --icon-small;
          background-position: -0px -270px;
      }
      --vmark-green-mini: {
          @apply --icon-mini;
          background-position: -36px -270px;
      }
      --vmark-grey4-mini: {
          @apply --icon-mini;
          background-position: -36px -288px;
      }
      --xmark-grey4-normal: {
          @apply --icon-normal;
          background-position: -54px -0px;
      }
      --xmark-grey3-normal: {
          @apply --icon-normal;
          background-position: -54px -54px;
      }
      --xmark-white-normal: {
          @apply --icon-normal;
          background-position: -54px -108px;
      }
      --xmark-white-small: {
          @apply --icon-small;
          background-position: -144px -234px;
      }
      --xmark-blue-small: {
          @apply --icon-small;
          background-position: -270px -72px;
      }
      --xmark-grey4-small: {
          @apply --icon-small;
          background-position: -180px -234px;
      }
      --xmark-grey3-small: {
          @apply --icon-small;
          background-position: -216px -234px;
      }
      --xmark-grey3b-small: {
          @apply --icon-small;
          background-position: -288px -144px;
      }
      --xmark-grey2-small: {
          @apply --icon-small;
          background-position: -108px -234px;
      }
      --arrowleft-grey3-normal: {
          @apply --icon-normal;
          background-position: -54px -162px;
      }
      --arrowleft-grey3-small: {
          @apply --icon-small;
          background-position: -180px -198px;
      }
      --arrowup-white-mini: {
          @apply --icon-mini;
          background-position: -306px -180px;
      }
      --arrowdown-blue-small: {
          @apply --icon-small;
          background-position: -306px -72px;
      }
      --logout-grey3-normal: {
          @apply --icon-normal;
          background-position: -54px -216px;
      }
      --logout-grey3-small: {
          @apply --icon-small;
          background-position: -216px -198px;
      }
      --reply-blue-normal: {
          @apply --icon-normal;
          background-position: -108px -0px;
      }
      --reply-grey4-mini: {
          @apply --icon-mini;
          background-position: -270px -0px;
      }
      --alert-blue-normal: {
          @apply --icon-normal;
          background-position: -108px -54px;
      }
      --plus-blue-normal: {
          @apply --icon-normal;
          background-position: -162px -0px;
      }
      --plus-grey4-normal: {
          @apply --icon-normal;
          background-position: -108px -270px;
      }
      --refresh-blue-normal: {
          @apply --icon-normal;
          background-position: -162px -54px;
      }
      --next-white-normal: {
          @apply --icon-normal;
          background-position: -162px -270px;
      }
      --next-blue-normal: {
          @apply --icon-normal;
          background-position: -216px -0px;
      }
      --next-grey4-normal: {
          @apply --icon-normal;
          background-position: -54px -270px;
      }
      --next-blue-small: {
          @apply --icon-small;
          background-position: -252px -198px;
      }
      --next-grey4-small: {
          @apply --icon-small;
          background-position: -252px -234px;
      }
      --prev-grey4-normal: {
          @apply --icon-normal;
          background-position: -216px -270px;
      }
      --rotate-blue-normal: {
          @apply --icon-normal;
          background-position: -216px -54px;
      }
      --chat-blue-normal: {
          @apply --icon-normal;
          background-position: -216px -108px;
      }
      --chat-blue-small: {
          @apply --icon-small;
          background-position: -288px -108px;
      }
      --chat-grey4-mini: {
          @apply --icon-mini;
          background-position: -288px -0px;
      }
      --chat-blue-mini: {
          @apply --icon-mini;
          background-position: -306px -0px;
      }
      --eyeball-grey4-small: {
          @apply --icon-small;
          background-position: -180px -162px;
      }
      --globe-grey4-small: {
          @apply --icon-small;
          background-position: -216px -162px;
      }
      --locationmarker-grey4-small: {
          @apply --icon-small;
          background-position: -252px -162px;
      }
      --swlogo-grey4: {
          @apply --sprite;
          width: 108px;
          height: 50px;
          background-position: -108px -108px;
      }
      --defaultavatar-grey4: {
          @apply --sprite;
          width: 72px;
          height: 72px;
          background-position: -108px -162px;
      }
      --arrowup-blue-small: {
          @apply --icon-small;
          background-position: -288px -198px;
      }
      --arrowup-grey4-small: {
          @apply --icon-small;
          background-position: -288px -234px;
      }

      /*----------CUSTOM ELEMENTS----------*/
      --base-shadow: {
          box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
          -webkit-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
          -o-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
      }
      --icon-button-big: {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          @apply --base-shadow;
          background-color: var(--sc-white);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          cursor: pointer;
      }
      --icon-button-mini: {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          @apply --base-shadow;
          background-color: var(--sc-white);
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
      }

      --text-button-big: {
          @apply --body-button;
          @apply --base-shadow;
          text-align: center;
          border: 0;
          box-sizing: border-box;
          padding: 30px 42px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          max-height: 82px;
          @apply --layout-vertical;
          @apply --layout-center-center;
      }

      --text-button-big-fullwhite: {
          @apply --text-button-big;
          background-color: var(--sc-white);
      }

      --text-button-small: {
          @apply --small-bold;
          @apply --base-shadow;
          border: 0;
          padding: 18px 24px;
          border-radius: 2px;
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
      }

      --button-active: {
          transform: scale(0.97, 0.97);
      }

      --close: {
          position: fixed;
          top: 18px;
          right: 18px;
          cursor: pointer;
      }

      --close-wide: {
          top: 30px;
          right: 30px;
      }

      --sc-paper-input: {
          --paper-input-container-color: var(--sc-grey4);
          --paper-input-container-focus-color: var(--sc-blue);
      }

      --sc-paper-checkbox: {
          --paper-checkbox-unchecked-color: var(--sc-grey4);
          --paper-checkbox-unchecked-ink-color: var(--sc-grey4);
          --paper-checkbox-checkmark-color: var(--sc-white);
          --paper-checkbox-checked-color: var(--sc-blue);
          --paper-checkbox-checked-ink-color: var(--sc-blue);
      }

      --confirmers-x: {
          cursor: pointer;
          margin-right: 20px;
      }

      --unlock-blur: {
          filter: blur(8px);
          opacity: 0.25;
          margin: 0;
          height: 100%;
          overflow: hidden
      }

      --general-divider: {
          width: 100vw;
          background-color: rgba(0, 0, 0, 0.05);
          opacity: 1;
          height: 1px;
      }

      /* --error-container: {
          min-height: 15vh;
      } */
      --error-container-wide: {
          text-align: left;
      }

      --error-msg: {
          margin: 20px 0px;
          @apply --body-bold;
          color: var(--sc-red2);
          @apply --layout-horizontal;
          @apply --layout-start;
          @apply --layout-center-justified;
          text-align: center;
      }

      --error-msg-wide: {
          margin: 20px 0px 30px 0px;
          @apply --body-bold;
          color: var(--sc-red2);
          @apply --layout-horizontal;
          @apply --layout-start;
          @apply --layout-start-justified;
      }


      /*----------PAGE TEMPLATES----------*/
      /* TITLEPAGE*/
      --titlepage-closed: {
          min-height: 100vh;
          width: 100vw;
          display: block;
      }

      --titlepage-closed-container: {
          min-height: 100vh;
          width: 100%;
          display: block;
          @apply --layout-vertical;
          box-sizing: border-box;
          padding: 20vh 50px 20vh 50px;
      }

      --titlepage-closed-wide-container: {
          padding: 20vh 10vw 22vh 10vw;
      }

      --titlepage-closed-container-top: {
          width: 100%;
          display: block;
          @apply --layout-vertical;
          box-sizing: border-box;
          padding-bottom: 5vh;
      }

      --titlepage-closed-container-bottom: {
          width: 100%;
          display: block;
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-start-justified;
      }

      --titlepage-closed-wide-container-bottom: {
          @apply --layout-vertical;
          @apply --layout-start;
          @apply --layout-start-justified;
      }

      --titlepage-flexer: {
          @apply --layout-flex;
      }

      --titlepage-open: {
          min-height: 100vh;
          width: 100vw;
          display: block;
      }

      --titlepage-open-container: {
          width: 100%;
          display: block;
          @apply --layout-vertical;
          min-height: 100vh;
          box-sizing: border-box;
          padding: 20vh 50px 12vh 50px;
      }

      --titlepage-open-wide-container: {
          padding: 20vh 10vw 20vh 10vw;
      }

      --titlepage-open-container-top: {
          width: 100%;
          display: block;
          @apply --layout-vertical;
      }

      --titlepage-open-container-bottom: {
          width: 100%;
          display: block;
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-start-justified;
      }

      --titlepage-open-wide-container-bottom: {
          @apply --layout-vertical;
          @apply --layout-start;
          @apply --layout-start-justified;
      }

      --titlepage-title: {
          @apply --main-title1;
          word-wrap: break-word;
          text-align: center;
      }

      --titlepage-subtitle: {
          @apply --small-light;
          margin: 20px 0 0;
          text-align: center;
      }

      --titlepage-title-wide: {
          @apply --main-title1-wide;
          text-align: left;
          max-width: 630px;
      }

      --titlepage-subtitle-wide: {
          @apply --small-light-wide;
          text-align: left;
          max-width: 630px;
      }

      --titlepage-confirmers: {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          margin-bottom: 10vh;
      }

      --titlepage-confirmers-wide: {
          @apply --layout-horizontal;
          @apply --layout-center;
          @apply --layout-start-justified;
          margin-bottom: 10px;
      }

      /* PROCESSING-GREEN */
      /* JSON-FILE */
      --json-file-host: {
          height: 100vh;
          width: 100vw;
          display: block;
      }
      --json-file-container: {
          @apply --layout-vertical;
          background-image: var(--sc-bg);
          height: 100%;
          width: 100%;
      }
      --json-file-upper: {
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-center-justified;
          height: 60%;
          box-sizing: border-box;
          padding: 0 14vw;
      }
      --json-file-upper-wide: {
          @apply --layout-start;
          @apply --layout-end-justified;
          height: 55%;
          padding: 0 12vw 7vh;
      }
      --json-file-group: {
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-center-justified;
          width: 100%;
          margin: 20vh 0 0 0;
      }

      --json-file-text: {
          @apply --body-default;
          text-align: center;
      }

      --json-file-text-wide: {
          @apply --body-default-wide;
      }

      --json-file-text-button-big: {
          @apply --layout-vertical;
          @apply --layout-center-center;
          @apply --text-button-big;
          background-color: var(--sc-grey1);
          color: var(--sc-blue);
          box-sizing: border-box;
          width: 100%;
          max-width: 326px;
          max-height: 75px;
          margin: 20px 0 0;
      }
      --json-file-text-button-big-active: {
          @apply --button-active;
      }

      --json-file-bottom: {
          box-sizing: border-box;
          padding: 0 14vw;
          @apply --layout-vertical;
          @apply --layout-center;
          @apply --layout-start-justified;
          height: 40%;
      }

      --json-file-bottom-wide: {
          @apply --layout-start;
          height: 45%;
          padding: 0 12vw;
      }

      --json-file-icon-button-big: {
          @apply --icon-button-big;
      }

      --json-file-icon-button-big-active: {
          @apply --button-active;
      }

      --json-file-vmark: {
          @apply --vmark-blue-normal;
      }

      --json-file-close: {
          @apply --xmark-grey4-normal;
          @apply --close;
      }
  }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);