package br.com.lead.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.stream.Collectors;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.lead.modelo.Filme;

@WebServlet("/filme")
public class FilmeServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Filme coringa = new Filme("Coringa", "Drama", 2019);
		Filme matrix = new Filme("Matrix", "Ação", 1999);
		Filme forrestGump = new Filme("Forrest Gump", "Drama", 1994);
		
		ArrayList<Filme> filmes = new ArrayList<Filme>();
		
		filmes.add(coringa);
		filmes.add(matrix);
		filmes.add(forrestGump);

		String nome = req.getParameter("nome");
		String genero = req.getParameter("genero");
		String ano = req.getParameter("ano");
		
		ArrayList<Filme> listaFiltrada = filmes.stream().filter(filme -> filme.getNome().toUpperCase().equals(nome.toUpperCase())
				&& filme.getGenero().toUpperCase().equals(genero.toUpperCase())
				&& filme.getAno() >= Integer.parseInt(ano)).collect(Collectors.toCollection(ArrayList::new));
		
		req.setAttribute("listaFiltrada", listaFiltrada);
		
		RequestDispatcher dispatcher = req.getRequestDispatcher("/infofilme.jsp");
		dispatcher.forward(req, resp);
	}
}